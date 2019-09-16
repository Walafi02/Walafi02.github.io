const drops = document.querySelector('.drops')

const random = (max, min) => Math.random() * ( max - min ) + min
const intensidade = document.querySelector("input[name=intensidade]")

const send = () => {        
    for(let i = 0; i <= intensidade.value; i++){    
        const span = document.createElement('span')
        
        const position = random(100, 0)
        const height = random(18, 10)
        const width = random(2, 1.5)
        const opacity = random(0.6, 0.3)
        const deley = random(5, 0.1);
        
        span.style.width = `${width}px`
        span.style.height = `${height}px`
        span.style.left = `${position}%`
        span.style.opacity = `${opacity}`
        span.style.top = `-${height}px`
        span.style.animationDelay = `${deley}s`
        
        drops.appendChild(span)
    }
}

send();
setInterval(() => send(), 5000)