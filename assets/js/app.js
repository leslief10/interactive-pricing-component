const pageViews = document.querySelector('.pageviews');
const slider = document.querySelector('#slider');
const price = document.querySelector('.price');
const toggleBtn = document.querySelector('#toggle-button');
const discount = document.querySelector('.discount');


/*For the track to show a progress line on webkit browsers */

slider.oninput = function() {
  let value = (this.value-this.min)/(this.max-this.min)*100;
  this.style.background = 'linear-gradient(to right, var(--full-slider-bar-color) 0%, var(--full-slider-bar-color) ' + value + '%, var(--empty-slider-bar-color) ' + value + '%, var(--empty-slider-bar-color))';
  this.style.height = '0.8rem';
  this.style.borderRadius = '0.5rem';
};

/*If statement to change the text inside the span class="discount"*/

if (window.innerWidth >= 600) {
  discount.textContent = '25% discount';
} else {
  discount.textContent = '-25%';
}

/*Functions*/

function sliderInfo(e) {
  let sliderValue = e.target.value;

  if (toggleBtn.checked === true) {
    /*switch case with the 25% discount*/
    switch (sliderValue) {
      case '0':
        pageViews.textContent = '10K pageviews';
        price.textContent = '$6.00';
        break;
      case '1':
        pageViews.textContent = '50K pageviews';
        price.textContent = '$9.00';
        break;
      case '2':
        pageViews.textContent = '100K pageviews';
        price.textContent = '$12.00';
        break;
      case '3':
        pageViews.textContent = '500K pageviews';
        price.textContent = '$18.00';
        break;
      case '4':
        pageViews.textContent = '1M pageviews';
        price.textContent = '$27.00';
        break;
      default:
        break;
    }
  } else {
    switch (sliderValue) {
      case '0':
        pageViews.textContent = '10K pageviews';
        price.textContent = '$8.00';
        break;
      case '1':
        pageViews.textContent = '50K pageviews';
        price.textContent = '$12.00';
        break;
      case '2':
        pageViews.textContent = '100K pageviews';
        price.textContent = '$16.00';
        break;
      case '3':
        pageViews.textContent = '500K pageviews';
        price.textContent = '$24.00';
        break;
      case '4':
        pageViews.textContent = '1M pageviews';
        price.textContent = '$36.00';
        break;
      default:
        break;
    }
  }
}

/*Listeners*/
slider.addEventListener('input', sliderInfo);
slider.addEventListener('click', sliderInfo);