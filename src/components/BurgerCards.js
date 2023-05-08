function BurgerCards({name,content,price,image,key}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage : `url(${image})`}}></div>
        <h1 style={{marginBottom:'10px'}} >{name}</h1>
        <h6 style={{marginTop:'0px'}} >{content}</h6>
        <i>        
        <p style={{color:'red'}} >{price} TL </p>
        </i>
    </div>
  );
}
export default BurgerCards;
//i etiketi italik yazı için