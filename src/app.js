var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        //Grabs the template element that we want to render
        //In this case it is project input
        this.templateElement = document.getElementById('project-input');
        //Grabs the div that we will render our form to.
        this.hostElement = document.getElementById('app');
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.attach();
    }
    ProjectInput.prototype.attach = function () {
        //Insert right after opending div tag on host element
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    };
    return ProjectInput;
}());
var prjInput = new ProjectInput();