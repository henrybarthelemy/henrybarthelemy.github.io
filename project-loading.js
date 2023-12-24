
const nordle = {
    name: "Nordle", 
    link: "https://github.com/henrybarthelemy/nordle",
    description: "Developed the popular Wordle game in Java, and a version called Dordle, where the user guesses two words simultaneously. This project is designed with an object-oriented data design structure that allows for easy scaling into any wordle variant.",
    start: "February 2022",
    end: "",
    image: "images/nordle.png",
    private: false
}

const lic = {
    name: "Life is Currency",
    link: "https://github.com/henrybarthelemy/lifeiscurrency",
    description: "A python game based on movement and falling blocks. Life is currency, also called raining life, was built using the PyGames library where users had to dodge falling blocks, but movement cost them health.",
    start: "May 2019",
    end: "",
    image: "images/lifeiscurrency.png",
    private: false
}

const tag = {
    name: "Tag!",
    link: "https://github.com/henrybarthelemy/lifeiscurrency",
    description: "A game programmed in Java using Swing and AWT. The player who is \"it\" after the 30 seconds are over explodes/dies. Coded for a class I was teaching in Java in highschool.",
    start: "May 2019",
    end: "",   
    image: "images/taggame.png",
    private: false
}

const seam = {
    name: "Seam Carver",
    link: "https://github.com/henrybarthelemy/seamproject",
    description: "An image editing software created in Java that can resize photos using a liquid rescaling algorithm that incorporates Dijkstra’s algorithm. Created as a homework assignment in Northeasterns CS2510A (Accelerated Fundamentals of Computer Science) program.",
    start: "April 2022",
    end: "",
    image: "images/seamcarver.png",
    private: true
}

const imgprocessor = {
    name: "Image Processor",
    link: "https://github.com/henrybarthelemy/ImageProcessing",
    description: "A Java app which uses Model-View-Controller setup and other object oriented principles. Part of Northeastern's CS3500 (Objected Oriented Design) class. Allows users to edit images they import through a GUI. Includes options to save and import with PPM, BMP, JPG, and PNG",
    start: "June 2022",
    end: "",
    image: "images/imageprocessing.png",
    private: true
}

const datastructs = {
    name: "Data Structures",
    link: "https://github.com/henrybarthelemy/DataStructures",
    description: "Python implimentation of Binomial Heap, Skip List, Hashmaps, and Red Black Tree data structures. Part of Northeastern's CS5800 (Graduate Algorithms) curriculum.",
    start: "November 2022",
    end: "",
    image: "images/datastructs.png",
    private: true
}

const todoapp = {
    name: "Todo List Webapp",
    link: "https://github.com/henrybarthelemy/ToDoListApp/",
    description: "Django webapp which utlizes Bootstrap for front end. Allows users to register and login and create tasks. Once finished they can mark them as finished or delete them.",
    start: "December 2022",
    end: "",
    image: "images/todolist.png",
    private: false
}

const cactusStudy = {
    name: "Cactus Study",
    link: "https://github.com/henrybarthelemy/CactusStudy",
    description: "React webapp utilizing ChakraUI for front end and a python backend using FastAPI, developed during the Boston Hack Beanpot Hackathon with 4 classmates in Feburary 2023.",
    start: "Feburary 2023",
    end: "",
    image: "images/cactusstudy.jpg",
    private: false
}

const quizler = {
    name: "Quizler",
    link: "https://github.com/henrybarthelemy/Quizzler",
    description: "React native webapp utilizing open TriviaDB api to quiz users on their trivia knowledge.",
    start: "May 2023",
    end: "",
    image: "images/quizler.png",
    private: false
}
const stamine = {
    name: "Stamine",
    link: "https://github.com/henrybarthelemy/Stamine",
    description: "Next.js app created to understand finite automata by visualizing a state machine. Includes a small domain specific language to allow people to visualize specific transition functions. Also launched using <a href='https://main--stamineproject.netlify.app/statevisualizer'> Netlify </a>",
    start: "November 2023",
    end: "December 2023",
    image: "images/stamine.jpg",
    private: false
}
const obj = [stamine, quizler, cactusStudy, todoapp, datastructs, imgprocessor, seam, nordle, tag, lic]



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
                                    "<p class='card-text'> <small class='text-muted'> " + item.start

                if(item.end != "") {
                    htmlContent += " - " + item.end
                }

                if (item.private){
                    htmlContent += " </small></p>" + "<a href='contact.html' class='btn btn-danger'> Contact for Access </a>";
                } else {
                    htmlContent += " </small></p>" + "<a href=" + item.link + " class='btn btn-primary'> See on Github </a>" ;
                }
                    
                htmlContent += "</div>" + "</div>" + "</div>";



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