const inputs = document.querySelectorAll('.control input');

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate(){
    const suffix = this.dataset.sizing || '';    
    // console.log(this.name);
    // console.log(this.value);
    console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}