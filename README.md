#V.A.T
##(Vertically Align This)
A simple jQuery plugin to help add quick vertical alignment to DIV elements.
The current version of VAT (0.1.0) uses jQuery 3.1.0.
Platforms successfully tested on:
* Chrome 53.0.2785.116 m (64-bit)
* Microsoft Edge 38.14393.0.0 (Microsoft EdgeHTML 14.14393)
* Internet Explorer 8, 9, 10, 11 (Emulated with the mentioned Edge browser)
* Firefox 45.0 (for Acer)

### Setup
To setup this plugin, simply add the class `v-align-this` to the target DIV element you would like to vertically align.
The default options are:
```javascript
{
  vAlignment : 'middle',
  hAlignment : 'center',
  otherCSS : {}
}
```
vAlignment  : Vertical alignment.
hAlignment  : Horizontal alignment.
otherCSS    : Pass a javascript object with CSS attributes to additionally customize the div. Note: You will not be able to adjust the `display`, `vertical-align` or `text-align` properties since that would interfere with the effects set by the plugin.
You can also add the following attributes to the div element to specify the desired alignment: `data-vAlign="middle"` or `data-hAlign="right"`.
Example:
```html
<div class="v-align-this" data-vAlign="middle" data-hAlign="center">Test<br>Content</div>
```

## Methods:
### Init
If you want to initialize this plugin, you can select the target div and envoke the constructor like so:
```javascript
$('.targets').valign();
```
### Destroy
If you want to remove all effects of the plugin from a specific div(s), issue the `destroy` command:
```javascript
$('.targets').valign('destroy');
```
Note: This will remove the `v-align-this` class as well as any associated data tags.

More to come...
