const cardsContainer = document.querySelector('#load-cards');



fetch('./data.json').then(details => details.json()).then(details=>{
     
    details.map(data=>{
        cardsContainer.innerHTML += `  <div class="card">
        <img src='${data.imageUrl}'
            alt="">
        <div class="col">
            <div class="title">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="50"
                    viewBox="0 0 172 172" style=" fill:#000000;">
                    <g transform="">
                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                            stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                            stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                            font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                            <path d="M0,172v-172h172v172z" fill="none"></path>
                            <g id="original-icon" fill="#2ecc71">
                                <path
                                    d="M107.45297,5.83859l-2.76812,1.41766l-18.705,9.59438l-21.47985,-10.99859l-13.09485,20.27047l-24.10015,1.21609l-1.20266,24.10687l-20.26375,13.10156l11.01203,21.47312l-10.99859,21.47985l20.27047,13.09485l1.21609,24.10015l24.10687,1.20265l13.10156,20.26375l21.47312,-11.01203l21.47985,10.9986l13.09485,-20.27047l24.10015,-1.2161l1.20265,-24.10687l20.26375,-13.10156l-11.01203,-21.47312l10.9986,-21.47985l-20.27047,-13.09485l-1.2161,-24.10015l-24.10687,-1.20266zM105.05437,14.80141l11.63688,17.99953l21.41265,1.06156l1.08172,21.41265l17.99953,11.63016l-9.76234,19.07453l9.77578,19.07453l-17.99953,11.63688l-1.06156,21.41265l-21.41265,1.08172l-11.63016,17.99953l-19.07453,-9.76234l-19.07453,9.77578l-11.63688,-17.99953l-21.41266,-1.06156l-1.08172,-21.41265l-17.99953,-11.63016l9.76234,-19.07453l-9.77578,-19.07453l17.99953,-11.63688l1.06156,-21.41266l21.41265,-1.08172l11.63016,-17.99953l19.07453,9.76234zM111.71265,63.51906l-35.09203,34.01703l-16.27953,-16.27953l-7.29656,7.29656l23.46187,23.46187l42.3886,-41.08515z">
                                </path>
                            </g>
                            <path d="" fill="none"></path>
                        </g>
                    </g>
                </svg>
                ${data.title}
            </div>
    
        </div>
        <span>${data.description}</span>
        <div class="col-2">
            <span class="card-members-status">
                 ${data.onlineuser}
            </span>
    
            <span>
                ${data.alluser}
            </span>
        </div>
    </div>`
    })


})
