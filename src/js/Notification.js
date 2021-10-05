import {formatCurrency} from "./utils"
import classNames from "classnames";
 
export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");

  }
  
  clear() {
    this.container.innerHTML = "";
  }
      empty() {
        
      }
  render({type,price}) {
    const template = `
      <div class="notification type-${classNames(type, type==="hawaiian" ? 'is-danger':'')}">
        <button class="delete"></button>
        🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
      </div>
    `;
    this.container.innerHTML = template;
    this.container.querySelector('.delete').addEventListener('click',()=>this.clear())
    return this.container;
  }
}
