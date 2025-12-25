#!/bin/bash

# Script pour convertir RAPPORT_PROJET_MVC.md en PDF avec pandoc

echo "🔍 Vérification de l'installation de pandoc..."
if ! command -v pandoc &> /dev/null; then
    echo "❌ Pandoc n'est pas installé. Installez-le avec: brew install pandoc"
    exit 1
fi

echo "✅ Pandoc est installé"

echo ""
echo "🔍 Vérification d'un moteur LaTeX..."

# Vérifier pdflatex
if command -v pdflatex &> /dev/null; then
    PDF_ENGINE="pdflatex"
    echo "✅ pdflatex trouvé"
elif command -v xelatex &> /dev/null; then
    PDF_ENGINE="xelatex"
    echo "✅ xelatex trouvé"
elif command -v lualatex &> /dev/null; then
    PDF_ENGINE="lualatex"
    echo "✅ lualatex trouvé"
else
    echo "❌ Aucun moteur LaTeX trouvé"
    echo ""
    echo "Pour installer BasicTeX (recommandé):"
    echo "  1. brew install --cask basictex"
    echo "  2. Fermez et rouvrez votre terminal"
    echo "  3. sudo tlmgr update --self"
    echo "  4. sudo tlmgr install collection-fontsrecommended"
    echo ""
    echo "Ou utilisez le fichier HTML généré:"
    echo "  pandoc RAPPORT_PROJET_MVC.md -o RAPPORT_PROJET_MVC.html --standalone"
    echo "  (puis ouvrez le HTML dans un navigateur et imprimez en PDF)"
    exit 1
fi

echo ""
echo "📄 Conversion du Markdown en PDF avec couleurs pour les titres..."
pandoc RAPPORT_PROJET_MVC.md \
    -o RAPPORT_PROJET_MVC_PANDOC.pdf \
    --pdf-engine=$PDF_ENGINE \
    -V geometry:margin=2cm \
    -V fontsize=11pt \
    --toc \
    --toc-depth=2 \
    -V colorlinks=true \
    -V linkcolor=blue \
    -V urlcolor=blue \
    -V toccolor=gray \
    --highlight-style=tango

if [ $? -eq 0 ]; then
    echo "✅ PDF généré avec succès: RAPPORT_PROJET_MVC_PANDOC.pdf"
    echo "   Les titres sont maintenant colorés en bleu!"
else
    echo "❌ Erreur lors de la génération du PDF"
    exit 1
fi

