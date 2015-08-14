# nv-ui-utils

A collection of various user interface utilities including:

- Components:
  - check-box
  - nv-button

-Templates:
  - 

## Requirements

- Ember-cli >= 0.1.12
- Ember >= 1.10.x
- .netrc (for private repo installation using bower)

## Installation

In the root of your ember-cli project directory, run:

```
npm install --save-dev git+ssh://git@github.gallup.com:GAR/ui-common.git
```

Then, from the root of you ember-cli project, run:

```
ember g nv-ui-utils
```

## Removal

If for some reason you no longer need this awesome addon, go to the root of
your ember-cli project directory and run:

```
ember d nv-ui-utils
```

Followed by:

```
npm uninstall --save-dev nv-ui-utils
```

The addon also installs Bootstrap.  If you were not previously using Bootstrap
remove the dependency by running the following command:

```
bower uninstall --save gel-gss
```

```
bower uninstall --save d3
```

```
bower uninstall --save moment
```

```
bower uninstall --save modernizr
```

Lastly, remove the following entries from bower.json

```
gel-bootstrap
d3
moment
modernizr
```

# Addon Development

## Installation

* `git clone git@github.gallup.com/GAR/ui-common.git`
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).