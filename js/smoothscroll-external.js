/*!
 * A small hack to smooth scrolling to anchors from external pages.
 *
 * Author: Eskander Bejaoui
 */

$(document).ready(function () {
    if ($(location).attr('hash') == "#join1") {
        $("#join1").click();
    }

    if ($(location).attr('hash') == "#gallery1") {
        $("#gallery1").click();
    }

    if ($(location).attr('hash') == "#contact1") {
        $("#contact1").click();
    }
});