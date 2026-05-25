import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const videos = [
    '/video/vid1.mp4',
    '/video/vid2.mp4',
    '/video/vid3.mp4'
  ];

  // Estado para saber qual é o vídeo que está a dar (começa no 0, ou seja, vid1)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  // Função que é chamada quando o vídeo atual termina
  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // forçar o vídeo a dar play sempre que o ficheiro muda
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Recarrega o componente com o novo src
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  return (
    <header 
      className="hero hero--primary" 
      style={{ 
        padding: '5rem 2rem', 
        textAlign: 'center', 
        backgroundColor: '#000000d3',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',   
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center'
      }}
    >
      {/* Vídeo de Background */}
      <video 
        ref={videoRef}
        src={useBaseUrl(videos[currentVideoIndex])} 
        autoPlay 
        muted 
        playsInline
        onEnded={handleVideoEnded} // Executa a função quando o vídeo chegar ao fim
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', 
          zIndex: 1,          
        }}
      >
        O seu navegador não suporta a reprodução de vídeos.
      </video>

      {/* Conteúdo por cima do vídeo */}
      <div 
        className="container" 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          marginLeft: '0',
          marginRight: 'auto'
        }}
      >
        <h1 className="hero__title" 
            style={{ color: '#fff', 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.61)' , 
              width: '100%' , 
              maxWidth: '550px', 
              textAlign: 'left',
              marginLeft: '20%',
            }}>
          DASH ESTÁ A CHEGAR NO MERCADO! 26/27
        </h1>
        <p className="hero__subtitle" 
           style={{ 
              color: '#eceeed', 
              fontSize: '1.1rem', 
              margin: '0', 
              maxWidth: '700px', 
              marginLeft: '20%',   
              marginRight: 'auto', 
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.62)', 
              textAlign: 'left'  
        }}>
          Abra, marca, qualquer hora, em qualquer lado. DASH é uma plataforma de gestão de marcação e agendamento que conecta clientes e estabelecimentos de forma simples, rápida e eficiente.
        </p>
        <div style={{ marginTop: '2rem', alignItems: 'start', display: 'flex', marginLeft: '20%' }}>
          <Link
            className="button button--secondary button--lg"
            to="docs/intro"
            style={{marginRight: '15px', fontWeight: 'bold', backgroundColor: '#36a266', color: '#eceeed', borderColor: '#256b44'}}>
            Instalar a DASH
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="docs/intro"
            style={{fontWeight: 'bold' , backgroundColor: '#ffffff', color: '#000', borderColor: '#ffffff'}}>
            Instalar a DASH
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  const features = [
    {
      title: "Marcação Rápida",
      desc: "Marca em poucos segundos, desfruta em poucos minutos com o sistema da DASH.",
      img: "/img/servicos/restaurant.jpg",
      link: "/docs/intro"
    },
    {
      title: "Gestão Integrada",
      desc: "Acompanha o fluxo completo de reservas a partir de um único painel central.",
      img: "/img/servicos/gestao.jpg",    
      link: "/docs/intro"
    },
    {
      title: "Para Empresas",
      desc: "Soluções de agendamento adaptadas ao volume de negócios do seu estabelecimento.",
      img: "/img/servicos/empresas.jpg",  
      link: "/docs/intro"
    },
    {
      title: "Segurança Total",
      desc: "Validação estrita em Python 3.13 para evitar marcações duplicadas ou erradas.",
      img: "/img/servicos/seguranca.jpg", 
      link: "/docs/intro"
    }
  ];

  return (
    <Layout
      title="Início"
      description="DASH - Plataforma de Gestão de Marcação e Agendamento para Clientes e Estabelecimentos">
      <HomepageHeader />
      
      <main>
        <section className="carousel-section">
          <div className="container">
            <h2 className="titulo">Serviços da Dash em Portugal</h2>
            
            <div className="carousel-track">
              {features.map((item, index) => (
                <div className="card" key={index}>
                  <img 
                    src={useBaseUrl(item.img)} 
                    alt={item.title} 
                    className="card-bg" 
                    loading="lazy" 
                  />
                  
                  <div className="card-overlay" />
                  
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <Link className="card-btn" to={item.link}>
                      Saber mais
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </section>


        <section className="about-section">
          <div className="container">
            <div className="about-content">
            
              <span className="about-badge">Sobre nós</span>
            
              <h2 className="about-title">
                A DASH é a nova plataforma colaborativa de agendamento.
              </h2>
              
              <p className="about-text">
                Estamos a construir soluções inteligentes para aproximar pessoas e negócios locais. 
                Oferecemos alternativas eficientes para a gestão de marcações, 
                incluindo agendamento integrado de serviços, gestão de filas de espera e otimização de recursos.
              </p>
              
              <div>
                <Link className="about-btn" to="/docs/sobre_nos/missao">
                  A nossa missão
                </Link>
              </div>
              
              <img src="/img/missao/cama.png" alt="Imagem de cama" className="about-image" />

            </div>
          </div>
        </section>


      </main>
    </Layout>
  );
}
