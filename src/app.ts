class ProjectInput {
// Template Element is declared as an HTML element
    templateElement: HTMLTemplateElement;
    //Host Element will be the div that will host the rendered version of our app
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    constructor() {
        //Grabs the template element that we want to render
        //In this case it is project input
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        //Grabs the div that we will render our form to.
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input'
        this.attach()


    }

    private attach() {
        //Insert right after opending div tag on host element
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();