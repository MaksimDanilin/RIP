import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './static/css/category.css';
import './static/css/categories.css';
import logo1 from './static/img/1_1.jpg'
import logo2 from './static/img/1_2.jpg'
import logo3 from './static/img/2_3.jpg'
import logo4 from './static/img/2_4.jpg'
import logo5 from './static/img/3_5.jpg'
import logo6 from './static/img/3_6.jpg'
import logo7 from './static/img/4_7.jpg'
import logo8 from './static/img/4_8.jpg'
import logo9 from './static/img/5_9.jpg'
import logo10 from './static/img/5_10.jpg'


function template(image, Name, Price, Description) {
    return (
        <div>
            <div id="name">{Name}</div>
            <div className="ds">
                <img src={image} alt={"image"}/>
                <p id="i_ds">{Price}<span> ₽</span></p>
                <p>{Description}</p>
            </div>
        </div>
    );
}

function App() {

    return (
        <BrowserRouter basename="/" >
            <div>
                <div>
                    <strong id="title">Яндекс Лавка</strong>
                    <p>
                        <Link to="/"><strong id="catalog">Каталог</strong></Link>
                    </p>
                    <p>
                        <Link class="m_link" to="/category/1">Овощной прилавок</Link>
                    </p>
                    <p>
                        <Link class="m_link" to="/category/2">Молочный прилавок</Link>
                    </p>
                    <p>
                        <Link class="m_link" to="/category/3">Булочная</Link>
                    </p>
                    <p>
                        <Link class="m_link" to="/category/4">Вода и напитки</Link>
                    </p>
                    <p>
                        <Link class="m_link" to="/category/5">Сладкое и снеки</Link>
                    </p>
                </div>
                <hr />
                <Switch>
                    <Route exact path="/">
                        <div class="cbox">
                            <strong className="category1"><Link class="m_link" to="/category/1">Овощной прилавок</Link></strong>
                            {/*<p className="main">Помидоры</p>*/}
                            {/*<p className="main">Огурцы</p>*/}
                        </div>
                        <div class="cbox">
                            <strong className="category1"><Link class="m_link" to="/category/2">Молочный прилавок</Link></strong>
                            {/*<p class="main">Молоко</p>*/}
                            {/*<p class="main">Сыры</p>*/}
                        </div>
                        <div class="cbox">
                            <strong className="category1"><Link class="m_link" to="/category/3">Булочная</Link></strong>
                            {/*<p class="main">Хлеб из пекарен</p>*/}
                            {/*<p class="main">Выпечка</p>*/}
                        </div>
                        <div class="cbox">
                            <strong className="category1"><Link class="m_link" to="/category/4">Вода и напитки</Link></strong>
                            {/*<p class="main">Минеральная вода</p>*/}
                            {/*<p class="main">Соки прямого отжима</p>*/}
                        </div>
                        <div class="cbox">
                            <strong className="category1"><Link class="m_link" to="/category/5">Сладкое и снеки</Link></strong>
                            {/*<p class="main">Картофельные чипсы</p>*/}
                            {/*<p class="main">Молочный шоколад</p>*/}
                        </div>
                    </Route>
                    <Route exact path="/category/1">
                        <div>
                            <Link to="/"><strong id="catalog">Каталог</strong></Link>
                            <span> / </span>
                            <Link class="m_link" to="/category/1">Овощной прилавок</Link>
                        </div>
                        <div className="box">
                            <strong className="category1"><Link class="m_link" to="/category/1">Овощной прилавок</Link></strong>
                            <p className="main"><Link class="m_link" to="/category/1/tomato">Помидоры</Link></p>
                            <p className="main"><Link class="m_link" to="/category/1/cucumber">Огурцы</Link></p>
                        </div>
                    </Route>
                    <Route path="/category/2">
                        <div id="bg">
                            <div>
                                <Link to="/"><strong id="catalog">Каталог</strong></Link>
                                <span> / </span>
                                <Link class="m_link" to="/category/2">Молочный прилавок</Link>
                            </div>
                            <div>
                                <strong class="category">Молочный прилавок</strong>
                            </div>
                            {template(logo3, "Молоко", 75, "Молоко 2,5% Простоквашино")}
                            {template(logo4, "Сыры", 329, "Сыр Чеддер Cheese Gallery")}
                        </div>
                    </Route>
                    <Route path="/category/3">
                        <div id="bg">
                            <div>
                                <Link to="/"><strong id="catalog">Каталог</strong></Link>
                                <span> / </span>
                                <Link class="m_link" to="/category/3">Булочная</Link>
                            </div>
                            <div>
                                <strong class="category">Булочная</strong>
                            </div>
                            {template(logo5, "Хлеб из пекарен", 89, "Багет Из Лавки испанский")}
                            {template(logo6, "Выпечка", 99, "Мини-круассан миндальный")}
                        </div>
                    </Route>
                    <Route path="/category/4">
                        <div id="bg">
                            <div>
                                <Link to="/"><strong id="catalog">Каталог</strong></Link>
                                <span> / </span>
                                <Link class="m_link" to="/category/4">Вода и напитки</Link>
                            </div>
                            <div>
                                <strong class="category">Вода и напитки</strong>
                            </div>
                            {template(logo7, "Минеральная вода", 75, "Вода минеральная Borjomi")}
                            {template(logo8, "Соки прямого отжима", 339, "Сок гранатовый Benature прямой отжим")}
                        </div>
                    </Route>
                    <Route path="/category/5">
                        <div id="bg">
                            <div>
                                <Link to="/"><strong id="catalog">Каталог</strong></Link>
                                <span> / </span>
                                <Link class="m_link" to="/category/5">Сладкое и снеки</Link>
                            </div>
                            <div>
                                <strong class="category">Сладкое и снеки</strong>
                            </div>
                            {template(logo9, "Картофельные чипсы", 139, "Lay's Сыр")}
                            {template(logo10, "Молочный шоколад", 479, "Шоколад с печеньем Oreo Milka")}
                        </div>
                    </Route>
                    <Route path="/category/1/tomato">
                        <div id="bg">
                            <div>
                                <Link to="/"><strong id="catalog">Каталог</strong></Link>
                                <span> / </span>
                                <Link class="m_link" to="/category/1">Овощной прилавок</Link>
                                <span> / </span>
                                <Link class="m_link" to="/category/1/tomato">Помидоры</Link>
                            </div>
                            <div>
                                <strong className="category">Овощной прилавок</strong>
                            </div>
                            {template(logo1, "Помидоры", 83, "Помидоры розовые Азербайджан")}
                        </div>
                    </Route>
                    <Route path="/category/1/cucumber">
                        <div id="bg">
                            <div>
                                <Link to="/"><strong id="catalog">Каталог</strong></Link>
                                <span> / </span>
                                <Link class="m_link" to="/category/1">Овощной прилавок</Link>
                                <span> / </span>
                                <Link class="m_link" to="/category/1/cucumber">Огурцы</Link>
                            </div>
                            <div>
                                <strong className="category">Овощной прилавок</strong>
                            </div>
                            {template(logo2, "Огурцы", 85, "Огурцы луховицкие")}
                        </div>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
