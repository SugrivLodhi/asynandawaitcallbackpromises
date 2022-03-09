setTimeout(function() {
    console.log('my Name is Sugriv Lodhi')
}, 2000);

function x(y) {
    console.log('hi');
    y();
}

x(function y() {
    console.log('Hr');
})