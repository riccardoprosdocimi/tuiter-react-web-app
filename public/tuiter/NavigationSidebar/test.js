import NavigationSidebar from "./index";

const test = () => {
    $('#test').append(`${NavigationSidebar()}`);
}
$(test);