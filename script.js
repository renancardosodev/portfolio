function addSectionProject(nomeProjeto, descricaoProjeto, imagemSrc, i) {
    const divSelectionProject = document.getElementById('detalhes')
    const divImg = document.createElement('div')
    const imgProj = document.createElement('img')
    const divInformations = document.createElement('div')
    const h3 = document.createElement('h3')
    const pTech = document.createElement('p')
    const pInformations = document.createElement('p')
    const divButtons = document.createElement('div')
    const aDeploy = document.createElement('a')
    const imgDeploy = document.createElement('img')
    const pDeploy = document.createElement('p')
    const aRepositorio = document.createElement('a')
    const imgRepositorio = document.createElement('img')
    const pRepositorio = document.createElement('p')

    divSelectionProject.innerHTML = ''

    imgProj.classList.add('frame_proj')
    imgProj.src = imagemSrc
    h3.textContent = nomeProjeto
    pTech.textContent = descricaoProjeto
    divButtons.id = 'btn_proj'
    aDeploy.classList.add("btn_default")
    aDeploy.target = '_blank'
    aRepositorio.classList.add("btn_default")
    aRepositorio.target = '_blank'
    imgDeploy.src = "assets/img/deploy.png"
    imgRepositorio.src = "assets/img/github 2.png"
    pDeploy.textContent = 'Ver site'
    pDeploy.classList.add('p_Button')
    pRepositorio.textContent = 'Repositório'
    pRepositorio.classList.add('p_Button')
    divImg.classList.add('div_Proj_Img')

    aDeploy.href = document.querySelectorAll('.portfolio_hover a:first-child')[i].href
    aRepositorio.href = document.querySelectorAll('.portfolio_hover a:last-child')[i].href

    pInformations.textContent = document.querySelectorAll('.proj p:last-child')[i].textContent
    
    divImg.appendChild(imgProj)
    aDeploy.append(imgDeploy, pDeploy);
    aRepositorio.append(imgRepositorio, pRepositorio);
    divButtons.append(aDeploy, aRepositorio)
    divInformations.append(h3, pTech, pInformations, divButtons)

    divSelectionProject.append(divImg, divInformations)
}

function identifierDivsProjects(divs){
    divs.forEach((div, i) => {
        div.addEventListener('click', function() {  
            const nomeProjeto = this.querySelector('h3').textContent;
            const descricaoProjeto = this.querySelector('p').textContent;
            const imagemSrc = this.querySelector('.img_proj_container .frame_destaque').src;

            document.getElementById('detalhes').classList.remove('show-project');

            this.querySelector('.portfolio_hover').classList.add('show');
            this.querySelector('.frame_proj').classList.add('blurred');

            setTimeout(() => {
                document.getElementById('detalhes').classList.add('show-project');
            }, 1);

            document.getElementById('section_proj').classList.add('show-project_2');
        
            addSectionProject(nomeProjeto, descricaoProjeto, imagemSrc, i);

            this.querySelector('.portfolio_hover').classList.add('show');
            this.querySelector('.frame_proj').classList.add('blurred');

            const divsProj = document.querySelectorAll('.proj');
            const clickedDiv = this;

            divsProj.forEach((divProj) => {
                if (divProj !== clickedDiv) {
                    divProj.classList.remove('selected');
                    divProj.querySelector('.portfolio_hover').classList.remove('show');
                    divProj.querySelector('.frame_proj').classList.remove('blurred');
                }
            });
            
        });
    });
}

function updateArrowPosition(event) {
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    const rect = arrow.getBoundingClientRect();
    const imageX = rect.left + rect.width / 2;
    const imageY = rect.top + rect.height / 2;

    const angle = Math.atan2(mouseY - imageY, mouseX - imageX);

    const rotation = angle * (180 / Math.PI);
    arrow.style.transform = `rotate(${rotation}deg)`;
}

function ativandoCarrossel() {
    const carrossel = document.querySelector(".carrossel")
    const arrowBtn = document.querySelectorAll(".wrapper i")
    const firtsCardWidth = carrossel.querySelector(".card").offsetWidth
    let isDragging = false, startX, startScrollLeft

    const dragStart = (event) => {
        event.preventDefault()
        isDragging = true
        startX = event.pageX
        startScrollLeft = carrossel.scrollLeft
        carrossel.classList.add('.dragging')
    }

    const dragStop = () => {
        isDragging = false
        carrossel.classList.remove('.dragging')
    }

    const dragging = (e) => {
        if(!isDragging)return
        carrossel.scrollLeft = startScrollLeft - (e.pageX - startX)
    }

    carrossel.addEventListener('mousedown', dragStart)
    carrossel.addEventListener('mousemove', dragging)
    carrossel.addEventListener('mouseup', dragStop)

    arrowBtn.forEach (btn=> {
        btn.addEventListener('click', () => {
            carrossel.scrollLeft += btn.id === 'left' ? -firtsCardWidth : firtsCardWidth
        })
    })

}

function seeMore() {
    const divVerMais = document.querySelectorAll('.ver_mais')[0]

    if(divVerMais.classList.contains('show_ver_mais')) {
        divVerMais.classList.remove('show_ver_mais')
    }else {
        divVerMais.classList.add('show_ver_mais')
    }
    
}

const divs = document.querySelectorAll('.proj');
const arrow = document.getElementById('arrow');
identifierDivsProjects(divs)
ativandoCarrossel()

document.addEventListener('mousemove', updateArrowPosition);
document.querySelector('#btn_ver_mais').addEventListener('click', seeMore)



