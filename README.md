# welcomingfallschurch.github.io
Website for Welcoming Falls Church

## Testing

1. Download and install Ruby
2. Install the bundler gem: `gem install bundler`
3. Navigate to this project's folder and run `bundle install`
4. Test the website locally by running `make serve`
5. Go to the URL it gives you in the console to see the built website (normally [`localhost:4000`](http://localhost:4000))

## Donation via PayPal

Below are the three methods of donation through PayPal.

Sharable link: https://www.paypal.com/donate/?hosted_button_id=BHV8XLCPHAANS

Donate button (use `{% include paypal_button.html %}` instead):

```html
<form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="hosted_button_id" value="BHV8XLCPHAANS" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>
```

QR Code:

![Donation QR code](/images/donation-qr-code.png)
