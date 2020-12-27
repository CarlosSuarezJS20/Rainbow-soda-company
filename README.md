# Read Me

> This read.me file intends to explain the main fundamentals and approaches I undertook during the development of this project.

---

### Table of Contents

- [Description ](#description)
- [Technologies and Dependencies](#technologies-and-dependencies)
- [License](#license)
- [Author Info](#author-info)

---

## Description

Rainbow Sodas is a project that allows me to understand how an ecommerce could potentially work behind the scenes. Having worked with multiple ecommerce clients during my digital marketing career, I thought it would be interesting how an ecommerce works and how the flow of information is across the different parts works, especially the cart section.

### Capabilities

- Multiple product categories Filter
- Cart manipulation (ADD, REMOVE, INCREASE, DECREASE QUANTITY)
- Local Storage
- css responsive
- Fully Hosted

## Technologies and Dependencies

- JavaScript (OOP)
- CSS
- HTML
- Fontawesome
- Firebase (hosting server)

Some of the practice opporunities and new learnings:

- OOP
- Web page architecure
- filters

[Back To The Top](#read-me)

### Highlight coding learning - Filter capabilities and array

An example of how I created multiple filters, depending on users multiple selections.

```
	filterCategories(userFilters) {
		if (userFilters.length === 0) {
			const products = this.products.map((p) => p.id);
			products.forEach(
				(p) => (document.getElementById(p).style.display = 'block')
			);
			document.getElementById('remove-filters-btn').style.display = 'none';
		} else {
			const filters = userFilters.filter((filter, index) => {
				return userFilters.indexOf(filter) === index;
			});
			this.products
				.filter((prod) => {
					return !prod.type.some((prodType) => filters.includes(prodType));
				})
				.map((p) => p.id)
				.forEach((p) => (document.getElementById(p).style.display = 'none'));

			this.products
				.filter((prod) => {
					return prod.type.some((prodType) => filters.includes(prodType));
				})
				.map((p) => p.id)
				.forEach((p) => (document.getElementById(p).style.display = 'block'));
		}
	}
```

---

## License

MIT License

Copyright (c) [2020] [Carlos Suarez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PUxwPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#read-me)

---

## Author Info

- LinkedIn - [Link](https://www.linkedin.com/in/carlos-suarez-msc-a3659141/)
- Website - [my-portfolioweb](https://my-portfolioweb-ba888.web.app/)

[Back To The Top](#read-me)
