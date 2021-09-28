import { Card } from "../Card";
import { Navbar } from "../Navbar";
import "./style.scss";

export const PaginaInicial = () => {
  return (
    <>
      <Navbar />
      <section className="main_container">
        <main>
          <Card data={"01 de Jan de 2021"} titulo={"Agora é oficial: o Windows 11 está vindo "} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est itaque mollitia corporis necessitatibus quas eveniet numquam nostrum deleniti reprehenderit voluptatem!"}/>
          <Card data={"11 de Jan de 2021"} titulo={"Tim Berners-Lee vai leiloar código-fonte da web"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis delectus quisquam obcaecati, laborum saepe porro similique necessitatibus ex voluptas perferendis sunt aspernatur deleniti. Sint saepe quisquam iste provident corrupti sit veniam rerum doloremque quia alias veritatis, eligendi nulla nisi! Odit quisquam ab accusantium dolor architecto culpa autem et deleniti tenetur!"}/>
          <Card data={"21 de Jan de 2021"} titulo={"Tem Firefox novo no pedaço e você vai querer migrar"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum quis minus, consectetur pariatur amet nostrum? Minus doloremque illum ex inventore rem asperiores vitae iste maiores. Maxime, esse! Quaerat, tempore repellendus. Enim, iure dolorem voluptatibus rem eveniet blanditiis, facere eaque, corrupti a illo quod! Consequatur ipsum tempore at aliquid quibusdam nostrum pariatur assumenda quia esse corporis quae minima dolorum animi perferendis, fuga expedita est. Perspiciatis dicta doloribus ut accusantium repudiandae?"}/>
          <Card data={"28 de Jan de 2021"} titulo={"John McAfee, criador do antivírus McAfee, morre"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, debitis."}/>
        </main>
      </section>
    </>  
  );
};
