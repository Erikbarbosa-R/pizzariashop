
import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import logo from './img/457-4572678_free-png-pizza-png-png-image-with-transparent-removebg-preview.png';
import imagemCozinha from './img/cozinha.jpg';
import pizzafrango from './img/frango-removebg-preview.png';
import pizzacalabresa from './img/calabresa-removebg-preview.png';
import pizzaportuguesa from './img/portuguesa-removebg-preview (1).png';
import pizzastrogonoff from './img/strogonoff-removebg-preview.png';
import pizzasensacao from './img/sensacao-removebg-preview.png';
import pizzaconfete from './img/confete-removebg-preview.png';
import pizzaprestigio from './img/prestigio-removebg-preview.png';
import Lottie from 'react-lottie';


import { EntregaAnimationjsx } from './components/LottieAnimation/entregaAnimation';



Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
 

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }
  const customStyles = {
     content: {
      width: '500px',
      height: '500px',
      left: '32%',
      

     }
  }

  
  return (

    
    <div className='EstiloModal' id='EstiloModal' >
      <div className='modal-estilo' >
          <Modal 
              isOpen={modalIsOpen}
              onRequestClose={handleCloseModal}
              style={customStyles}
              >
              
                  <div className="entrega">
                    <EntregaAnimationjsx/>
                    <div className='texto' >  
                    <h2>Obrigado pela sua preferência.</h2>
                    </div>  
                    <br />        
                    <button
                    className='close-modal'
                    onClick={handleCloseModal} >fechar
                    </button>
                </div>
          </Modal>
        </div>
        
      <header className="content">
        <div className="logo">
          <img src={logo} alt="" />
          <h3>PizzaShop</h3>
        </div>
        <nav>
          <ul className="list-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#sobrenos">Sobre nós</a></li>
            <li><a href="#cardapio">Cardápio</a></li>
            <li><a href="#contatos">Contatos</a></li>
            <li><a href="#"><i className="bi bi-facebook"></i></a></li>
            <li><a href="#"><i className="bi bi-instagram"></i></a></li>
            <li><a href="#"><i className="bi bi-cart3"></i></a></li>
          </ul>
        </nav>
      </header>

      <section className="first-section">
        <div className="conteudo-principal">
          <h1>Deixe seu dia mais saboroso!!</h1>
          <h2>As pizzas mais recheadas da região </h2>
          <div className="btn">
            <a href="#cardapio"><button className="reservar">Reserve a sua pizza</button></a>
            <a href="#cardapio"><button className="montar">Monte a sua pizza</button></a>
          </div>
        </div>
      </section>

      <section className="sobre-nos" id="sobrenos">
        <div className="main">
          <div className="contentsobre">
            <h2>Sobre-nós</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt animi harum molestiae eum, consequuntur in libero corrupti asperiores officia ex vero necessitatibus voluptate nobis quam. Amet voluptas voluptate provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolores lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odio eos voluptas tempore maiores aut hic dicta consequatur nisi odit ullam commodi eum cupiditate quisquam, veritatis, saepe obcaecati beatae animi.excepturi dolorum voluptatibus asperiores cum explicabo ratione aliquid aut. Numquam reiciendis iure quas accusamus fuga asperiores perferendis repudiandae excepturi error!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id repellat, pariatur eos, fugiat reiciendis adipisci voluptatem, quos magni praesentium itaque unde quae omnis vel facilis aperiam dolore eligendi voluptate perferendis.</p>
          </div>
          <div className="img-cozinha"><img src={imagemCozinha} alt="cozinha" /></div>
        </div>
      </section>

     
      <section className="cardapio" id="cardapio">
        <h2>cardápio</h2>
        <div className="itens-cardapio" id='itens-cardapio' >
          <div className="frango">
            <img src={pizzafrango} alt="sabor frango" />
            <div className="info">
              <h3>frango</h3>
              <h4>6 fatias <span>R$35,00</span> </h4>
              <h4>8 fatias <span>R$45,00</span> </h4>
              <h4>12 fatias <span>R$55,00</span> </h4>
              <div className="container" >
              <button  className="Modal-button" onClick={handleOpenModal}>
              pedir agora
              </button>
               </div>
            </div>
          </div>
          <div className="calabresa">
            <img src={pizzacalabresa} alt="sabor calabresa" />
            <div className="info">
              <h3>calabresa</h3>
              <h4>6 fatias <span>R$35,00</span> </h4>
              <h4>8 fatias <span>R$45,00</span> </h4>
              <h4>12 fatias <span>R$55,00</span> </h4>
              <button className="Modal-button" onClick={handleOpenModal} >pedir agora</button>
            </div>
          </div>
          <div className="portuguesa">
            <img src={pizzaportuguesa}alt="sabor portuguesa" />
            <div className="info">
              <h3>portuguesa</h3>
              <h4>6 fatias <span>R$35,00</span> </h4>
              <h4>8 fatias <span>R$45,00</span> </h4>
              <h4>12 fatias <span>R$55,00</span> </h4>
              <button className="Modal-button" onClick={handleOpenModal} >pedir agora</button>
            </div>
          </div>
          <div className="strogonoff">
            <img src={pizzastrogonoff} alt="sabor strogonoff" />
            <div className="info">
              <h3>strogonoff</h3>
              <h4>6 fatias <span>R$35,00</span> </h4>
              <h4>8 fatias <span>R$45,00</span> </h4>
              <h4>12 fatias <span>R$55,00</span> </h4>
              <button className="Modal-button" onClick={handleOpenModal} > pedir agora</button>
            </div>
          </div>
          <div className="sensacao">
            <img src={pizzasensacao} alt="sabor sensaçao" />
            <div className="info">
              <h3>sensacao</h3>
              <h4>6 fatias <span>R$35,00</span> </h4>
              <h4>8 fatias <span>R$45,00</span> </h4>
              <h4>12 fatias <span>R$55,00</span> </h4>
              <button className="Modal-button" onClick={handleOpenModal} >  pedir agora</button>
            </div>
          </div>
          <div className="confete">
            <img src={pizzaconfete} alt="sabor confete" />
            <div className="info">
              <h3>confete</h3>
              <h4>6 fatias <span>R$35,00</span> </h4>
              <h4>8 fatias <span>R$45,00</span> </h4>
              <h4>12 fatias <span>R$55,00</span> </h4>
              <button className="Modal-button" onClick={handleOpenModal}  > pedir agora</button>
            </div>
          </div>
          <div className="prestigio">
            <img src={pizzaprestigio} alt="sabor prestigio" />
            <div className="info">
              <h3>prestigio</h3>
              <h4>6 fatias <span>R$35,00</span> </h4>
              <h4>8 fatias <span>R$45,00</span> </h4>
              <h4>12 fatias <span>R$55,00</span> </h4>
              <button className="Modal-button" onClick={handleOpenModal} > pedir agora</button>
            </div>
          </div>
        </div>
      </section>
      <section className="contatos" id="contatos">
        <h3>Contatos</h3>
        <div className="contatos-secao">
          <div>
            <i className="bi bi-facebook"></i>
          <a href="https://www.instagram.com/digitalcollegebr?igsh=MTRmcDI3czY1dzRqbw=="><span>Digital_College</span></a>  
          </div>
          <div>
            <i className="bi bi-instagram"></i>
            <a href="https://www.instagram.com/_barb0s4_?igsh=MXJpN3RpOHVrZGw2cg=="><span>@barb0s4</span></a>
          </div>
          <div>
            <i className="bi bi-telephone"></i>
            <span>(85)98888-9999</span>
          </div>
        </div>
      </section>
   
      <footer>
        <h4>Desenvolvido por Erik Barbosa</h4>
      </footer>

      
    </div>
  );
}

export default App;
