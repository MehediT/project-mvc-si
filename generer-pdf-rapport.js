const puppeteer = require('puppeteer');
const path = require('path');

async function genererPDF() {
  console.log('🚀 Démarrage de la génération du PDF...');
  
  // Vérifier si le serveur est déjà en cours d'exécution
  const port = process.env.PORT || 3000;
  const url = `http://localhost:${port}/rapport`;
  
  console.log(`📄 Ouverture de la page: ${url}`);
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Configurer la page pour charger les images
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Désactiver le lazy loading des images pour Puppeteer
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      request.continue();
    });
    
    // Attendre que la page soit complètement chargée
    console.log('⏳ Chargement de la page...');
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 120000
    });
    
    // Faire défiler la page pour déclencher le chargement lazy des images
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Attendre que toutes les images soient chargées
    console.log('🖼️  Attente du chargement des images...');
    
    // Fonction pour attendre que toutes les images soient chargées
    await page.evaluate(() => {
      return new Promise((resolve) => {
        const images = document.querySelectorAll('img');
        const totalImages = images.length;
        let loadedImages = 0;
        
        console.log(`Nombre d'images trouvées: ${totalImages}`);
        
        if (totalImages === 0) {
          resolve();
          return;
        }
        
        const checkImage = (img) => {
          return new Promise((imgResolve) => {
            if (img.complete && img.naturalHeight !== 0) {
              console.log(`Image chargée: ${img.src}`);
              imgResolve();
            } else {
              const onLoad = () => {
                console.log(`Image chargée après attente: ${img.src}`);
                imgResolve();
              };
              const onError = () => {
                console.log(`Erreur de chargement pour: ${img.src}`);
                imgResolve(); // Continue même en cas d'erreur
              };
              
              img.addEventListener('load', onLoad, { once: true });
              img.addEventListener('error', onError, { once: true });
              
              // Timeout de sécurité
              setTimeout(() => {
                img.removeEventListener('load', onLoad);
                img.removeEventListener('error', onError);
                imgResolve();
              }, 20000);
            }
          });
        };
        
        Promise.all(Array.from(images).map(checkImage)).then(() => {
          console.log('Toutes les images ont été traitées');
          resolve();
        });
      });
    });
    
    // Attendre un peu supplémentaire pour être sûr que tout est rendu
    console.log('⏳ Attente finale du rendu...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Options pour le PDF
    const pdfOptions = {
      path: path.join(__dirname, 'RAPPORT_PROJET_MVC.pdf'),
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm'
      },
      preferCSSPageSize: false,
      displayHeaderFooter: false
    };
    
    console.log('📑 Génération du PDF...');
    await page.pdf(pdfOptions);
    
    console.log('✅ PDF généré avec succès: RAPPORT_PROJET_MVC.pdf');
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération du PDF:', error);
    console.log('\n💡 Assurez-vous que le serveur Next.js est en cours d\'exécution:');
    console.log('   npm run dev');
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Lancer directement la génération
genererPDF().catch((error) => {
  console.error('❌ Erreur:', error.message);
  console.error('\n💡 Assurez-vous que le serveur Next.js est en cours d\'exécution:');
  console.error('   npm run dev');
  process.exit(1);
});

