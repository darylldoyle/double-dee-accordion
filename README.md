# Double-Dee-Accordion

A very basic jQuery accordion

## Usage

Mark up your document in the following way

```html
    <div class="accordian">
	    <div class="wrap initial">
	        <h4 class="title">Title 1</h4>
	        <div class="innerContent">Some content for this accordion</div>
	    </div>

	    <div class="wrap">
	        <h4 class="title">Title 2</h4>
	        <div class="innerContent">Some different content for this accordion</div>
	    </div>
	</div>
```

```javascript
    var accordion = doubleDeeAccordion($('.accordian'));
```


You can programmatically toggle the accordion using the public API using the following methods:

### Open

Open a accordion section

```javascript
	accordion.open($('.selector'));
```

### Close

Close a accordion section

```javascript
	accordion.close($('.selector'));
```

### Close All

Close all accordion sections

```javascript
	accordion.closeAll();
```

## Contributing

If you feel like contributing, add any issues you run across or even better, submit a PR :)