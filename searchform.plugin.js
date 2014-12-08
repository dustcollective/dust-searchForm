(function($){

	var SearchForm = function(element, options) {
		var self = $(element);
		var _this = this;

		var settings = $.extend({
			'inputSelector' : 'input[type=search]',
			'focusedClass' : 'is-focused'
		}, options || {});

		var isFocussed = false;
		var inputElem = self.children(settings.inputSelector);

		this.init = function() {
			var _this = this;

			inputElem.on('focus', function() {
				_this._focus();
			});

			// we don't want to blur immediately because clicking on the submit
			// button counts as blurring, and if the input is empty this will
			// cause a quick blur-then-focus.
			inputElem.on('blur', function() {

				var blurDelay = 200;
				window.setTimeout(function() {
					_this._blur();
				}, blurDelay);

			});

			// don't submit if the input is not focussed, as we want this to
			// instead focus the input.
			self.on('submit', function() {

				if (!_this.isFocussed) {
					inputElem.focus();
					return false;
				}

			});

			return _this;
		}

		this._focus = function() {
			var _this = this;

			_this.isFocussed = true;
			self.addClass(settings.focusedClass);

			return _this;
		}

		this._blur = function() {
			var _this = this;

			_this.isFocussed = false;
			self.removeClass(settings.focusedClass);

			return _this;
		}

	};

	$.fn.searchForm = function(options) {
		return this.each(function() {
			var element = $(this);

			// Return early if this element already has a plugin instance
			if (element.data('searchForm')) return;

			// pass options to plugin constructor
			var searchForm = new SearchForm(this, options);

			searchForm.init();

			// Store plugin object in this element's data
			element.data('searchForm', searchForm);
		});
	};
})(jQuery);
