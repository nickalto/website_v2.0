 exports.home = function(req, res) {
	res.render('home', {
    title: 'Home', 
    nav_class: 'navbar-home',
    nav_links: [
      { title: '', href: '#', classes: 'icon-diamond'},
      { title: 'Preface', href: '#preface'},
      { title: 'Chapter 1', href: '#chapter1'},
    	{ title: 'Chapter 2', href: '#chapter2'},
      { title: 'Chapter 3', href:'#chapter3'}, 
      { title: 'Epilogue', href: '#epilogue'},
    ]
  });
};

exports.catchall = function(req, res) {
	res.render('404', {
    	title: '404', 
	    hide_navbar:true
  	});
};



