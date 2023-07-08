import "./Header.scss";
export default function Header({ img, text, legend, textBtn }) {
  return (
    <main>
      <div className='Header-gradient'>
        <div className='Header-logo'>
          <img src={img} alt='rocket' />
        </div>
        {/* <img className='Header-image' src='src\assets\spacex.jpg' alt='' /> */}
        <div className='Header-dscr'>
          <span className='Header-text'>{text}</span>
          <span className='Header-legend'>{legend}</span>
          <button className='Header-btn'>{textBtn}</button>
        </div>
      </div>
    </main>
  );
}
