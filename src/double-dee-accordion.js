/**
 * Basic jQuery accordion
 *
 * @param accordion
 * @returns {{open: open, close: close, closeAll: closeAll}}
 */
function doubleDeeAccordion(accordion) {

    /**
     * Initialize the accordion
     */
    $(accordion).find('.wrap').each(function(){
        var content = $(this).find('.innerContent')[0];
        $(content).attr('data-height', $(content).height());
        $(content).height(0);
    });

    /**
     * Initialize the listeners
     */
    $(accordion).find('.wrap').on('click', function(){
        if ($(this).hasClass('open')) {
            close($(this));
        } else {
            closeAll();
            open($(this));
        }
    });

    openInitial();

    /**
     * Open the initial section
     */
    function openInitial() {
        var initial = $(accordion).find('.initial')[0];
        open($(initial));
    }

    /**
     * Close all sections
     */
    function closeAll() {
        $(accordion).find('.wrap').each(function(){
            close($(this));
        });
    }

    /**
     * Open a section
     *
     * @param wrap
     */
    function open(wrap) {
        var content = wrap.find('.innerContent')[0];
        $(content).height($(content).attr('data-height'));
        wrap.addClass('open');
    }

    /**
     * Close a section
     *
     * @param wrap
     */
    function close(wrap) {
        var content = wrap.find('.innerContent')[0];
        $(content).height(0);
        wrap.removeClass('open');
    }

    /**
     * Return the Public API
     */
    return {
        open: open,
        close: close,
        closeAll: closeAll,
    }
}