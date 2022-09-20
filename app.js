// https://www.omnicalculator.com/health/mean-sac-diameter

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const meansacdiameterRadio = document.getElementById('meansacdiameterRadio');
const lengthRadio = document.getElementById('lengthRadio');
const widthRadio = document.getElementById('widthRadio');
const heightRadio = document.getElementById('heightRadio');

let meansacdiameter;
let length = v1;
let width = v2;
let height = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

meansacdiameterRadio.addEventListener('click', function() {
  variable1.textContent = 'Length';
  variable2.textContent = 'Width';
  variable3.textContent = 'Height';
  length = v1;
  width = v2;
  height = v3;
  result.textContent = '';
});

lengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Mean sac diameter';
  variable2.textContent = 'Width';
  variable3.textContent = 'Height';
  meansacdiameter = v1;
  width = v2;
  height = v3;
  result.textContent = '';
});

widthRadio.addEventListener('click', function() {
  variable1.textContent = 'Mean sac diameter';
  variable2.textContent = 'Length';
  variable3.textContent = 'Height';
  meansacdiameter = v1;
  length = v2;
  height = v3;
  result.textContent = '';
});

heightRadio.addEventListener('click', function() {
  variable1.textContent = 'Mean sac diameter';
  variable2.textContent = 'Length';
  variable3.textContent = 'Width';
  meansacdiameter = v1;
  length = v2;
  width = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(meansacdiameterRadio.checked)
    result.textContent = `Mean sac diameter = ${computemeansacdiameter().toFixed(2)}`;

  else if(lengthRadio.checked)
    result.textContent = `Length = ${computelength().toFixed(2)}`;

  else if(widthRadio.checked)
    result.textContent = `Width = ${computewidth().toFixed(2)}`;

  else if(heightRadio.checked)
    result.textContent = `Height = ${computeheight().toFixed(2)}`;
})

// calculation

function computemeansacdiameter() {
  return (Number(length.value) + Number(width.value) + Number(height.value)) / 3;
}

function computelength() {
  return (Number(meansacdiameter.value) * 3) - Number(width.value) - Number(height.value);
}

function computewidth() {
  return (Number(meansacdiameter.value) * 3) - Number(length.value) - Number(height.value);
}

function computeheight() {
  return (Number(meansacdiameter.value) * 3) - Number(width.value) - Number(length.value);
}