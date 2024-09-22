import Header from "../components/header";
import Footer from "../components/footer";
import { servicesPackages } from "../content/Services-content";

export default function Services() {
   return (
    <div className="app">
      <Header />
      {servicesPackages.map((service, index) => {
        let title = service.title;
        return (
          <div key={`${title}-service-${index}`}>
            <h3 id={`${service.id}`}>{title}</h3>
            <p>{service.description}</p>
            <h4>{service.price}</h4>
            <ul>
              {service.list.map((bullet, index) => {
                return (
                  <li key={`${title}-service-bullet-${index}`}>{bullet}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
      <Footer />
    </div>
   )
}