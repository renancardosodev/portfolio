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
    imgDeploy.src = "assets/img/github 2.png"
    imgRepositorio.src = "assets/img/github 2.png"
    pDeploy.textContent = 'Ver site'
    pDeploy.classList.add('p_Button')
    pRepositorio.textContent = 'Repositório'
    pRepositorio.classList.add('p_Button')
    

    switch (i) {
        case 0:
            aDeploy.href = 'https://github.com/renancardosodev'
            aRepositorio.href = 'https://github.com/renancardosodev'
            pInformations.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, iure nisi repellendus in illum voluptate eaque doloremque facilis nemo earum vero magni illo, cupiditate blanditiis iusto ex cumque tempore rerum.'
            break
        case 1:
            aDeploy.href = 'https://github.com/renancardosodev'
            aRepositorio.href = 'https://github.com/renancardosodev'
            pInformations.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, iure nisi repellendus in illum voluptate eaque doloremque facilis nemo earum vero magni illo, cupiditate blanditiis iusto ex cumque tempore rerum.'
            break
        case 2:
            aDeploy.href = 'https://github.com/renancardosodev'
            aRepositorio.href = 'https://github.com/renancardosodev'
            pInformations.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, iure nisi repellendus in illum voluptate eaque doloremque facilis nemo earum vero magni illo, cupiditate blanditiis iusto ex cumque tempore rerum.'
            break
        case 3:
            aDeploy.href = 'https://github.com/renancardosodev'
            aRepositorio.href = 'https://github.com/renancardosodev'
            pInformations.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, iure nisi repellendus in illum voluptate eaque doloremque facilis nemo earum vero magni illo, cupiditate blanditiis iusto ex cumque tempore rerum.'
            break
        case 4:
            aDeploy.href = 'https://github.com/renancardosodev'
            aRepositorio.href = 'https://github.com/renancardosodev'
            pInformations.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, iure nisi repellendus in illum voluptate eaque doloremque facilis nemo earum vero magni illo, cupiditate blanditiis iusto ex cumque tempore rerum.'
            break
    }

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
            const imagemSrc = this.querySelector('.img_proj_container .frame_proj').src;

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

const divs = document.querySelectorAll('.proj');
identifierDivsProjects(divs)



