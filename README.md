# kerouac-cname

This is a [kerouac](https://github.com/jaredhanson/kerouac) plugin that generates a CNAME file, [useful for pages on github](https://help.github.com/articles/setting-up-a-custom-domain-with-pages), for example.


## Install

    $ npm install kerouac-cname


## Usage

Simply plug `kerouac-cname` into your site and specify ypur domain. The generated output will
include a `/CNAME` file.

    site.plug(require('kerouac-cname')('www.domain.net'));


## Tests

    // TODO
    $ npm install
    $ make test


## Credits

  - [Aurélien Scoubeau](http://github.com/qur2)


## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Aurélien Scoubeau <http://aurelienscoubeau.eu/>
