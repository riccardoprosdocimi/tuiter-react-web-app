import NavigationSidebar from "./NavigationSidebar.js";

const test = () => {
    $('#test').append(`${NavigationSidebar('home')}`);
}
$(test);