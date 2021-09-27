import './style.scss';
import search_icon from '../assets/image/search.svg';

export const Navbar = () => {
	return (
		<section className="container">
			<header className="navbar">
				<div className="nav_info">
					<span>Codelândia</span>
					<span>Blog</span>
				</div>
				<div className="nav_search">
					<img src={search_icon} alt="" />
					<input type="text" placeholder="Pesquisar no blog"/>
					{/* <span>X</span> */}
				</div>
			</header>
		</section> 
	)
}