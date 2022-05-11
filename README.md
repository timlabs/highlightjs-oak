# highlightjs-oak

A [highlight.js](https://highlightjs.org/) language definition for the [Oak](https://oakproof.org/) proof checker.

Provides syntax highlighting for Oak on web pages.

## Usage

First, get highlight.js from [here](https://highlightjs.org/download/).  It comes with a script `highlight.min.js` and a set of styles, e.g. `default.min.css`.

Next, get `oak.min.js` from the `dist` folder of the current repository.

Then add the following to your web page:

```html
<link rel="stylesheet" href="path/to/default.min.css">
<script type="text/javascript" src="path/to/highlight.min.js"></script>
<script type="text/javascript" src="path/to/oak.min.js"></script>
<script type="text/javascript">hljs.highlightAll();</script>
```

Oak can then be highlighted like this:

```html
<pre><code class="language-oak">...</code></pre>
```

For more ways to use highlight.js, see [here](https://highlightjs.org/usage/).