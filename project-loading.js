
const nordle = {
    name: "Nordle", 
    link: "https://github.com/henrybarthelemy/nordle",
    description: "Developed the popular Wordle game in Java, and a version called Dordle, where the user guesses two words simultaneously. This project is designed with an object-oriented data design structure that allows for easy scaling into any wordle variant.",
    start: 2022,
    end: 2022,
    image: "images/nordle.png"
}

const lic = {
    name: "Life is Currency",
    link: "https://github.com/henrybarthelemy/lifeiscurrency",
    description: "A python game based on movement and falling blocks. Life is currency, also called raining life, was built using the PyGames library where users had to dodge falling blocks, but movement cost them health.",
    start: 2019,
    end: 2019,
    image: "images/lifeiscurrency.png"
}

const tag = {
    name: "Tag!",
    link: "https://github.com/henrybarthelemy/lifeiscurrency",
    description: "A game programmed in Java using Swing and AWT. The player who is \"it\" after the 30 seconds are over explodes/dies. Coded for a class I was teaching in Java in highschool.",
    start: 2019,
    end: 2019,   
    image: "images/taggame.png"
}

const seam = {
    name: "Seam Carver",
    link: "https://github.com/henrybarthelemy/seamproject",
    description: "An image editing software created in Java that can resize photos using a liquid rescaling algorithm that incorporates Dijkstra’s algorithm. Created as a homework assignment in Northeasterns CS2510A (Accelerated Fundamentals of Computer Science) program.",
    start: 2022,
    end: 2022,
    image: "images/seamcarver.png"
}

const imgprocessor = {
    name: "Image Processor",
    link: "https://github.com/henrybarthelemy/ImageProcessing",
    description: "A Java app which uses Model-View-Controller setup and other object oriented principles. Part of Northeastern's CS3500 (Objected Oriented Design) class. Allows users to edit images they import through a GUI. Includes options to save and import with PPM, BMP, JPG, and PNG",
    start: 2022,
    end: 2022,
    image: "images/imageprocessing.png"
}

const datastructs = {
    name: "Data Structures",
    link: "https://github.com/henrybarthelemy/DataStructures",
    description: "Python implimentation of Binomial Heap, Skip List, Hashmaps, and Red Black Tree data structures. Part of Northeastern's CS5800 (Graduate Algorithms) curriculium.",
    start: 2022,
    end: 2022,
    image: "images/datastructs.png"
}

const obj = [datastructs, imgprocessor, seam, nordle, tag, lic]

$(function () {
    htmlContent = "";
    $.each(obj, function (index, item) {
                console.log(item)
                
                if (index % 3 == 0){
                    htmlContent += "<div class='row'>"
                    //console.log("Beggining: " + index)
                }
                
                htmlContent += "<div class='col-lg-4 d-flex align-items-stretch'>" +
                            "<div class='card'> " +
                                "<img src=" + item.image + " class='card-img-top' alt=" + item.name + ">" +
                                "<div class='card-body'>" +
                                    "<h5 class='card-title'>" + item.name + "</h5>" +
                                    "<p class='card-text'> " + item.description + " </p>" +
                                "</div>" +
                                "<div class='card-footer'>" +
                                    "<p class='card-text'> <small class='text-muted'> " + item.start + " - " + item.end + " </small></p>" +
                                    "<a href=" + item.link + " class='btn btn-primary'> See on Github </a>" +
                                "</div>" +
                            "</div>" +
                        "</div>";



                if (index % 3 == 2) {
                    htmlContent += "</div>"
                    //console.log("End of row: " + index)
                }

            });
             // htmlContent below contains your whole html
             console.log('success', htmlContent);
             $(".container").append(htmlContent);
        });


        /*

        <div class="card">
                                <img src="images/taggame.png" class="card-img-top" alt="tag game">
                                <div class="card-body">
                                    <h5 class="card-title">Tag!</h5>
                                    <p class="card-text">A game created in Java using Swing and AWT. The player who is "it" after the 30 seconds are over explodes/dies. 
                                        Coded for a class I was teaching in Java in highschool.</p>
                                </div>
                                <div class="card-footer">
                                    <p class="card-text"><small class="text-muted">Coded in 2019</small></p>
                                    <a href="https://github.com/henrybarthelemy/tag" class="btn btn-primary">See on Github</a>
                                </div>
                            </div>
                            */