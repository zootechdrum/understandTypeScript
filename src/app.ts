//autobind decorator
function hellow(arg1){
    return function w(arg2){
        console.log(arg1 + arg2)
    }
}

hellow()


class ProjectInput {
// Template Element is declared as an HTML element
    templateElement: HTMLTemplateElement;
    //Host Element will be the div that will host the rendered version of our app
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;




    constructor() {
        //Grabs the template element that we want to render
        //In this case it is project input
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        //Grabs the div that we will render our form to.
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';


        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
        this.attach();
    }

    private submitHandler(event: Event){
        event.preventDefault();
        console.log(this.titleInputElement.value)
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this))
    }

    private attach() {
        //Insert right after opending div tag on host element
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();