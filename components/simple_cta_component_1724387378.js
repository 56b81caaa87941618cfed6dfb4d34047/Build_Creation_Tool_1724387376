/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1724387378", {
    template: `
    <section id="cta-component" style="min-height: 470px" class="bg-gradient-to-r from-pink-500 to-purple-700 flex-1 min-h-390px p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto bg-white bg-opacity-20 rounded-lg backdrop-filter backdrop-blur-lg shadow-lg p-8">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex mb-4">
                    <h2 id="cta-title" class="flex-1 text-3xl font-extrabold leading-tight tracking-tight text-white">Streamline process</h2>
                </div>
                <div id="cta-subtitle-container" class="flex mb-6">
                    <p id="cta-subtitle" class="flex-1 text-lg font-light text-gray-200">Simplify, accelerate, and optimize your software builds with our powerful automation tool</p>
                </div>
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-800 bg-white bg-opacity-30 hover:bg-opacity-50 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 ease-in-out">Start Building Smarter</a>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
