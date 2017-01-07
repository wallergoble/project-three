myApp.component('storyNew', {
  templateUrl: 'js/stories/storyNewComponent/storyNew.html',
  controller: function() {
    console.log('hello from storyNew component controller');
  }
});

// myApp.component('storyNew', {
//     template: '<h1>Hello from component</h1>',
//     // templateUrl: 'js/stories/storyIndexComponent/storyIndex.html',
//     controller: function(storyService, $state) {
//         console.log('hello from storyNew controller');
//         this.story = {
//             name   = null,
//             animal = null,
//             place  = null
//         };
//         this.create = function() {
//             storyService.create(this.story)
//             .then( res => {
//                 $state.go('storyIndex')
//             });
//         }
//     }
// });