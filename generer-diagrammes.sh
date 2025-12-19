#!/bin/bash
# Script de génération des diagrammes PlantUML en PNG et PDF

# Configuration
PROJECT_DIR="/Users/adil/Workspace/Ecole/EFREI/ING2/Modelisation/project-mvc-si"
OUTPUT_DIR="$PROJECT_DIR/output"
FORMATS=("png" "pdf" "svg")

# Couleurs pour l'output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Banners
echo -e "${BLUE}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║    Générateur de Diagrammes PlantUML                        ║"
echo "║    Projet MVC - Système d'Évaluation des Enseignants      ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Vérifier les dépendances
echo -e "${YELLOW}Vérification des dépendances...${NC}"

if ! command -v plantuml &> /dev/null; then
    echo -e "${RED}❌ PlantUML non installé${NC}"
    echo -e "${YELLOW}Installation:${NC}"
    echo "  brew install plantuml"
    exit 1
else
    echo -e "${GREEN}✓ PlantUML${NC} installé"
fi

if ! command -v java &> /dev/null; then
    echo -e "${RED}❌ Java non installé${NC}"
    exit 1
else
    echo -e "${GREEN}✓ Java${NC} installé"
fi

# Pour PDF, graphviz est recommandé
if ! command -v dot &> /dev/null; then
    echo -e "${YELLOW}⚠ Graphviz non détecté${NC} (recommandé pour les PDF)"
    echo "  Installation: brew install graphviz"
else
    echo -e "${GREEN}✓ Graphviz${NC} installé"
fi

# Créer le dossier output
if [ ! -d "$OUTPUT_DIR" ]; then
    mkdir -p "$OUTPUT_DIR"
    echo -e "${GREEN}✓${NC} Dossier output créé: $OUTPUT_DIR"
fi

# Lister les fichiers PlantUML
echo -e "\n${BLUE}Fichiers à traiter:${NC}"
FILES=$(find "$PROJECT_DIR" -maxdepth 1 -name "*.puml" -type f | sort)
FILE_COUNT=$(echo "$FILES" | wc -l)
echo -e "Trouvé: ${GREEN}$FILE_COUNT${NC} fichiers PlantUML"

# Traitement
echo -e "\n${BLUE}Génération des diagrammes...${NC}\n"

SUCCESS=0
FAILED=0

for FILE in $FILES; do
    FILENAME=$(basename "$FILE")
    BASENAME="${FILENAME%.puml}"
    
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "📄 $FILENAME"
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    
    # PNG
    echo -e "  ${BLUE}→${NC} Génération PNG..."
    if plantuml -png -o "$OUTPUT_DIR" "$FILE" > /dev/null 2>&1; then
        echo -e "    ${GREEN}✓${NC} $BASENAME.png"
        ((SUCCESS++))
    else
        echo -e "    ${RED}✗${NC} Erreur génération PNG"
        ((FAILED++))
    fi
    
    # SVG
    echo -e "  ${BLUE}→${NC} Génération SVG..."
    if plantuml -svg -o "$OUTPUT_DIR" "$FILE" > /dev/null 2>&1; then
        echo -e "    ${GREEN}✓${NC} $BASENAME.svg"
        ((SUCCESS++))
    else
        echo -e "    ${RED}✗${NC} Erreur génération SVG"
        ((FAILED++))
    fi
    
    # PDF (si Graphviz disponible)
    if command -v dot &> /dev/null; then
        echo -e "  ${BLUE}→${NC} Génération PDF..."
        if plantuml -pdf -o "$OUTPUT_DIR" "$FILE" > /dev/null 2>&1; then
            echo -e "    ${GREEN}✓${NC} $BASENAME.pdf"
            ((SUCCESS++))
        else
            echo -e "    ${YELLOW}⚠${NC} Erreur génération PDF (Graphviz requis)"
            ((FAILED++))
        fi
    fi
    
    echo ""
done

# Statistiques
echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║${NC}                    ${YELLOW}RÉSUMÉ DU TRAITEMENT${NC}                       ${BLUE}║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo -e "Fichiers traités: ${GREEN}$FILE_COUNT${NC}"
echo -e "Fichiers générés: ${GREEN}$SUCCESS${NC}"
if [ $FAILED -gt 0 ]; then
    echo -e "Erreurs: ${RED}$FAILED${NC}"
else
    echo -e "Erreurs: ${GREEN}0${NC}"
fi

# Afficher l'espace disque
echo -e "\n${BLUE}Fichiers générés dans:${NC} $OUTPUT_DIR"
DISK_USAGE=$(du -sh "$OUTPUT_DIR" 2>/dev/null | cut -f1)
echo -e "Espace disque utilisé: ${GREEN}$DISK_USAGE${NC}"

# Lister les fichiers
echo -e "\n${BLUE}Fichiers disponibles:${NC}"
ls -lh "$OUTPUT_DIR" | tail -n +2 | awk '{print "  " $9 " (" $5 ")"}'

# Statistiques détaillées
echo -e "\n${BLUE}Statistiques:${NC}"
PNG_COUNT=$(ls "$OUTPUT_DIR"/*.png 2>/dev/null | wc -l)
SVG_COUNT=$(ls "$OUTPUT_DIR"/*.svg 2>/dev/null | wc -l)
PDF_COUNT=$(ls "$OUTPUT_DIR"/*.pdf 2>/dev/null | wc -l)

echo -e "  PNG: ${GREEN}$PNG_COUNT${NC} fichiers"
echo -e "  SVG: ${GREEN}$SVG_COUNT${NC} fichiers"
echo -e "  PDF: ${GREEN}$PDF_COUNT${NC} fichiers"

# Recommandations finales
echo -e "\n${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║${NC}                    ${YELLOW}PROCHAINES ÉTAPES${NC}                      ${BLUE}║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}✓${NC} Tous les diagrammes ont été générés avec succès!"
    echo ""
    echo -e "${YELLOW}Maintenant:${NC}"
    echo -e "  1. Vérifiez les fichiers PNG/SVG dans: $OUTPUT_DIR"
    echo -e "  2. Utilisez un outil de composition PDF (Word, Google Docs, etc.)"
    echo -e "  3. Insérez les images PNG de chaque diagramme"
    echo -e "  4. Combinez avec la documentation Markdown"
    echo -e "  5. Générez le PDF final: NOM1_NOM2.pdf"
    echo -e "  6. Remettez sur Moodle avant J+7"
else
    echo -e "${RED}✗${NC} Certains fichiers n'ont pas pu être générés"
    echo -e "  Vérifiez l'installation de PlantUML et Graphviz"
fi

echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║  Génération terminée ! 🎉                                   ${GREEN}║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

exit 0

