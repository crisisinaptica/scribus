<!DOCTYPE TS>
<TS>
  <context>
    <name></name>
    <message>
      <source>getColorNames() -> list

Returns a list containing the names of all defined colors in the document.
If no document is open, returns a list of the default document colors.
</source>
      <translation>getColorNames() -> list 

Palauttaa listan värien nimistä, jotka on määritelty asiakirjassa. 
Jos asiakirjoja ei ole avoinna, palauttaa listan oletusväreistä.</translation>
    </message>
    <message>
      <source>newDocDialog() -> bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</source>
      <translation>getColorNames() -> list

Näyttää dialogin &quot;Uusi asiakirja&quot;. Luo uuden asiakirjan, jos käyttäjä hyväksyy
asetukset. Asiakirjaa ei luoda, jos käyttäjä painaa Peruuta-painiketta.
Palauttaa true, jos uusi asiakirja luotiin.</translation>
    </message>
    <message>
      <source>getFillColor([&quot;name&quot;]) -> string

Returns the name of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation>getFillColor([&quot;name&quot;]) -> string

Palauttaa täyttövärin nimen kohteelle &quot;name&quot;.
Jos &quot;name&quot; ei ole annettu käytetään valittuna olevaa kohdetta.</translation>
    </message>
    <message>
      <source>moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</source>
      <translation>moveObject(dx, dy [, &quot;name&quot;])

Siirtää kohdetta &quot;name&quot; arvoilla dx ja dy  suhteessa nykyiseen sijaintiin. Etäisyydet
ilmaistaan asikirjassa käytössä olevalla yksiköllä (katso UNIT-vakio). Jos &quot;name&quot; ei
ole määritelty, käytetään valittuna olevaa kohdetta. Jos kohde &quot;name&quot; kuuluu 
ryhmään, koko ryhmää siirretään.</translation>
    </message>
    <message>
      <source>setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</source>
      <translation>setRedraw(bool)

Estää sivun uudelleenpiirron, kun bool=False. Muuten uudelleen piirto on 
käytössä. Tämä asetus jää voimaan vaikka skriptistä poistutaan. Varmista,
että kutsut setRedraw(True) finally: -lauseessa ylimmällä tasolla skriptissäsi.</translation>
    </message>
    <message>
      <source>createRect(x, y, width, height, [&quot;name&quot;]) -> string

Creates a new rectangle on the current page and returns its name. The
coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name to reference that object in future. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
</source>
      <translation>createRect(x, y, width, height, [&quot;name&quot;]) -> string

Luo uuden nelikulmion nykyiselle sivulle ja palauttaa luodun kohteen nimen.
Koordinaatit on annettava asikirjassa käytössä olevalla yksiköllä. Katso (UNIT vakiot).
&quot;name&quot;:n tulee olla yksilöllinen tunniste kohteelle, koska tarvitset nimeä myöhemmin
viitatessasi nelikulmioon. Jos &quot;name&quot;:a ei anneta Scribus luo sen.

Saattaa nostaa NameExistsError:n, jos annettu nimi on jo olemassa.</translation>
    </message>
    <message>
      <source>newPage(where [,&quot;template&quot;])

Creates a new page. If &quot;where&quot; is -1 the new Page is appended to the
document, otherwise the new page is inserted before &quot;where&quot;. Page numbers are
counted from 1 upwards, no matter what the displayed first page number of your
document is. The optional parameter &quot;template&quot; specifies the name of the
template page for the new page.

May raise IndexError if the page number is out of range
</source>
      <translation>newPage(where [,&quot;template&quot;])

Luo uuden sivun. Jos &quot;where&quot; on -1 sivu lisätään asiakirjan loppuun, muuten sivu lisätään
sivun &quot;where&quot; eteen. Sivunumerot lasketaan yhdestä ylöspäin, vaikka asikirjan ensimmäisen
sivun numeroksi olisi valittu joku muu. Vapaaehtoinen toinen parametri kertoo sivulla
käytettävän sivumallin.

Saattaa nostaa IndexError:n, jos sivunumero on sallittujen rajojen ulkopuolella</translation>
    </message>
    <message>
      <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type>).
</source>
      <translation>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Asettaa liukuväritäytön kohteelle &quot;name&quot;. Värin kuvukset ovat samat kuin
setFillColor():lla ja setFillShade():lla. Katso vakiot FILL_&lt;type>.</translation>
    </message>
    <message>
      <source>getFontSize([&quot;name&quot;]) -> float

Returns the font size in points for the text frame &quot;name&quot;. If this text
frame has some text selected the value assigned to the first character of
the selection is returned.
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation>getFontSize([&quot;name&quot;]) -> float

Palauttaa kirjaintyypin koon pisteinä tekstikehykselle &quot;name&quot;. Jos tekstikehyksessä
on tekstiä valittuna palautetaan valinnan ensimmäisen kirjaintyypin koko.
Jos &quot;name&quot; ei ole määritelty, käytetään valittuna olevaa kohdetta.</translation>
    </message>
    <message>
      <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or 'unicode' string(recommended).
</source>
      <translation>messagebarText(&quot;string&quot;)

Asettaa tekstin &quot;string&quot; Scribuksen tilariville. Teksti täytyy olla UTF8 koodattu tai
'unicode' teksti (suositeltavaa).</translation>
    </message>
    <message>
      <source>register_macro_callable(name, callable, accel='')

Create a macro called &quot;name&quot; with the existing callable object &quot;callable&quot;.
The passed callable must not require any arguments when called (it may take
optional arguments, but will not be given any).
If provided, the string &quot;accel&quot; will be used to set a keyboard shortcut
for the macro.
If the passed callable is a class, it will be rejected. Functions and bound
methods are quite acceptable, as are instances of classes that provide a
__call__ method with no arguments. There is no problem with registering
a callable more than once, nor with registering multiple bound methods
of a single instance.
</source>
      <translation>register_macro_callable(name, callable, accel='')

Create a macro called &quot;name&quot; with the existing callable object &quot;callable&quot;.
The passed callable must not require any arguments when called (it may take
optional arguments, but will not be given any).
If provided, the string &quot;accel&quot; will be used to set a keyboard shortcut
for the macro.
If the passed callable is a class, it will be rejected. Functions and bound
methods are quite acceptable, as are instances of classes that provide a
__call__ method with no arguments. There is no problem with registering
a callable more than once, nor with registering multiple bound methods
of a single instance.</translation>
    </message>
    <message>
      <source>newDocument(size, margins, orientation, firstPageNumber,
unit, pagesType, firstPageOrder) -> bool

WARNING: This is backported function from 1.3.x series. You are using constants
larger PAGE_3 and bigger on your own risk. So do you with firstPageOrder biger
than 1.

Creates a new document and returns true if successful. The parameters have the
following meaning:

size = A tuple (width, height) describing the size of the document. You can
use predefined constants named PAPER_&lt;paper_type> e.g. PAPER_A4 etc.

margins = A tuple (left, right, top, bottom) describing the document
margins

orientation = the page orientation - constants PORTRAIT, LANDSCAPE

firstPageNumer = is the number of the first page in the document used for
pagenumbering. While you'll usually want 1, it's useful to have higher
numbers if you're creating a document in several parts.

unit: this value sets the measurement units used by the document. Use a
predefined constant for this, one of: UNIT_INCHES, UNIT_MILLIMETERS,
UNIT_PICAS, UNIT_POINTS.

pagesType = One of the predefined constants PAGE_n. PAGE_1 is single page,
PAGE_2 is for double sided documents, PAGE_3 is for 3 pages fold and
PAGE_4 is 4-fold.

firstPageOrder = What is position of first page in the document.
Indexed from 0 (0 = first).

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDocument(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 7, UNIT_POINTS,
PAGE_4, 3)

May raise ScribusError if is firstPageOrder bigger than allowed by pagesType.
</source>
      <translation>newDocument(size, margins, orientation, firstPageNumber,
unit, pagesType, firstPageOrder) -> bool

WARNING: This is backported function from 1.3.x series. You are using constants
larger PAGE_3 and bigger on your own risk. So do you with firstPageOrder biger
than 1.

Creates a new document and returns true if successful. The parameters have the
following meaning:

size = A tuple (width, height) describing the size of the document. You can
use predefined constants named PAPER_&lt;paper_type> e.g. PAPER_A4 etc.

margins = A tuple (left, right, top, bottom) describing the document
margins

orientation = the page orientation - constants PORTRAIT, LANDSCAPE

firstPageNumer = is the number of the first page in the document used for
pagenumbering. While you'll usually want 1, it's useful to have higher
numbers if you're creating a document in several parts.

unit: this value sets the measurement units used by the document. Use a
predefined constant for this, one of: UNIT_INCHES, UNIT_MILLIMETERS,
UNIT_PICAS, UNIT_POINTS.

pagesType = One of the predefined constants PAGE_n. PAGE_1 is single page,
PAGE_2 is for double sided documents, PAGE_3 is for 3 pages fold and
PAGE_4 is 4-fold.

firstPageOrder = What is position of first page in the document.
Indexed from 0 (0 = first).

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDocument(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 7, UNIT_POINTS,
PAGE_4, 3)

May raise ScribusError if is firstPageOrder bigger than allowed by pagesType.
</translation>
    </message>
  </context>
  <context>
    <name>@default</name>
    <message>
      <source>getColor(&quot;name&quot;) -> tuple

Returns a tuple (C, M, Y, K) containing the four color components of the
color &quot;name&quot; from the current document. If no document is open, returns
the value of the named color from the default document colors.

May raise NotFoundError if the named color wasn't found.
May raise ValueError if an invalid color name is specified.
</source>
      <translation>getColor(&quot;name&quot;) -> tuple

Palauttaa tuplen (C, M, Y, K) värille &quot;name&quot; nykyisestä asiakirjasta. Jos asiakirjaa
ei ole avoinna, palauttaa värin oletusväreistä.

Saattaa nostaa NotFoundError:n, jos väriä ei löydy.
Saattaa nostaa ValueError:n, jos värin nimi on viallinen.</translation>
    </message>
    <message>
      <source>changeColor(&quot;name&quot;, c, m, y, k)

Changes the color &quot;name&quot; to the specified CMYK value. The color value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Color components should be in the range from 0 to 255.

May raise NotFoundError if the named color wasn't found.
May raise ValueError if an invalid color name is specified.
</source>
      <translation>changeColor(&quot;name&quot;, c, m, y, k)

Vaihtaa värin &quot;name&quot; vastaamaan väriä c, m, y, k (kaikki määritelty välillä 0, 255).</translation>
    </message>
    <message>
      <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yellow and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
      <translation>defineColor(&quot;name&quot;, c, m, y, k)

Määrittää uuden värin &quot;name&quot; värillä c, m, y, k (määritelty välillä 0, 255).

Saattaa nostaa ValueError:n, jos värin nimi on viallinen.</translation>
    </message>
    <message>
      <source>deleteColor(&quot;name&quot;, &quot;replace&quot;)

Deletes the color &quot;name&quot;. Every occurence of that color is replaced by the
color &quot;replace&quot;. If not specified, &quot;replace&quot; defaults to the color
&quot;None&quot; - transparent.

deleteColor works on the default document colors if there is no document open.
In that case, &quot;replace&quot;, if specified, has no effect.

May raise NotFoundError if a named color wasn't found.
May raise ValueError if an invalid color name is specified.
</source>
      <translation>deleteColor(&quot;name&quot;, &quot;replace&quot;)

Poistaa värin &quot;nimi&quot;, joka korvataan värillä &quot;replace&quot;. Oletuksena &quot;replace&quot; on None (läpinäkyvä).

deleteColors toimii asiakirjassa määritellyillä väreillä, asiakirja on avoinna.

Saattaa nostaa NotFoundError:n, jos nimettyä väriä ei löydy.
Saattaa nostaa ValueError:n, jos värin nimi on viallinen.</translation>
    </message>
    <message>
      <source>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurence of the color &quot;name&quot; is replaced by the color &quot;replace&quot;.

May raise NotFoundError if a named color wasn't found.
May raise ValueError if an invalid color name is specified.
</source>
      <translation>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Jokainen ilmentymä väristä &quot;name&quot; korvataan värillä &quot;replace&quot;.

Saattaa nostaa NotFoundError:n, jos nimettyä väriä ei löydy.
Saattaa nostaa ValueError:n, jos värin nimi on viallinen.</translation>
    </message>
    <message>
      <source>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot; ,haspreview, issave]) -> string with filename

Shows a File Open dialog box with the caption &quot;caption&quot;. Files are filtered
with the filter string &quot;filter&quot;. A default filename or file path can also
supplied, leave this string empty when you don't want to use it.  A value of
True for haspreview enables a small preview widget in the FileSelect box.  When
the issave parameter is set to True the dialog acts like a &quot;Save As&quot; dialog
otherwise it acts like a &quot;File Open Dialog&quot;. The default for both of the
opional parameters is False.

The filter, if specified, takes the form 'comment (*.type *.type2 ...)'.
For example 'Images (*.png *.xpm *.jpg)'.

Refer to the Qt-Documentation for QFileDialog for details on filters.

Example: fileDialog('Open input', 'CSV files (*.csv)')
Example: fileDialog('Save report', defaultname='report.txt', issave=True)
</source>
      <translation>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot; ,haspreview, issave]) -> string with filename 
 
Shows a File Open dialog box with the caption &quot;caption&quot;. Files are filtered 
with the filter string &quot;filter&quot;. A default filename or file path can also 
supplied, leave this string empty when you don't want to use it.  A value of 
True for haspreview enables a small preview widget in the FileSelect box.  When 
the issave parameter is set to True the dialog acts like a &quot;Save As&quot; dialog 
otherwise it acts like a &quot;File Open Dialog&quot;. The default for both of the 
opional parameters is False. 
 
The filter, if specified, takes the form 'comment (*.type *.type2 ...)'. 
For example 'Images (*.png *.xpm *.jpg)'. 
 
Refer to the Qt-Documentation for QFileDialog for details on filters. 
 
Example: fileDialog('Open input', 'CSV files (*.csv)') 
Example: fileDialog('Save report', defaultname='report.txt', issave=True) </translation>
    </message>
    <message>
      <source>messageBox(&quot;caption&quot;, &quot;message&quot;,
    icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT,
    button2=BUTTON_NONE, button3=BUTTON_NONE) -> integer

Displays a message box with the title &quot;caption&quot;, the message &quot;message&quot;, and
an icon &quot;icon&quot; and up to 3 buttons. By default no icon is used and a single
button, OK, is displayed. Only the caption and message arguments are required,
though setting an icon and appropriate button(s) is strongly
recommended. The message text may contain simple HTML-like markup.

Returns the number of the button the user pressed. Button numbers start
at 1.

For the icon and the button parameters there are predefined constants available
with the same names as in the Qt Documentation. These are the BUTTON_* and
ICON_* constants defined in the module. There are also two extra constants that
can be binary-ORed with button constants:
    BUTTONOPT_DEFAULT   Pressing enter presses this button.
    BUTTONOPT_ESCAPE    Pressing escape presses this button.

Usage examples:
result = messageBox('Script failed',
                    'This script only works when you have a text frame selected.',
                    ICON_ERROR)
result = messageBox('Monkeys!', 'Something went ook! &lt;i>Was it a monkey?&lt;/i>',
                    ICON_WARNING, BUTTON_YES|BUTTONOPT_DEFAULT,
                    BUTTON_NO, BUTTON_IGNORE|BUTTONOPT_ESCAPE)

Defined button and icon constants:
BUTTON_NONE, BUTTON_ABORT, BUTTON_CANCEL, BUTTON_IGNORE, BUTTON_NO,
BUTTON_NOALL, BUTTON_OK, BUTTON_RETRY, BUTTON_YES, BUTTON_YESALL,
ICON_NONE, ICON_INFORMATION, ICON_WARNING, ICON_CRITICAL.
</source>
      <translation>messageBox(&quot;caption&quot;, &quot;message&quot;, 
    icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT, 
    button2=BUTTON_NONE, button3=BUTTON_NONE) -> integer 
 
Displays a message box with the title &quot;caption&quot;, the message &quot;message&quot;, and 
an icon &quot;icon&quot; and up to 3 buttons. By default no icon is used and a single 
button, OK, is displayed. Only the caption and message arguments are required, 
though setting an icon and appropriate button(s) is strongly 
recommended. The message text may contain simple HTML-like markup. 
 
Returns the number of the button the user pressed. Button numbers start 
at 1. 
 
For the icon and the button parameters there are predefined constants available 
with the same names as in the Qt Documentation. These are the BUTTON_* and 
ICON_* constants defined in the module. There are also two extra constants that 
can be binary-ORed with button constants: 
    BUTTONOPT_DEFAULT   Pressing enter presses this button. 
    BUTTONOPT_ESCAPE    Pressing escape presses this button. 
 
Usage examples: 
result = messageBox('Script failed', 
                    'This script only works when you have a text frame selected.', 
                    ICON_ERROR) 
result = messageBox('Monkeys!', 'Something went ook! &lt;i>Was it a monkey?&lt;/i>', 
                    ICON_WARNING, BUTTON_YES|BUTTONOPT_DEFAULT, 
                    BUTTON_NO, BUTTON_IGNORE|BUTTONOPT_ESCAPE) 
 
Defined button and icon constants: 
BUTTON_NONE, BUTTON_ABORT, BUTTON_CANCEL, BUTTON_IGNORE, BUTTON_NO, 
BUTTON_NOALL, BUTTON_OK, BUTTON_RETRY, BUTTON_YES, BUTTON_YESALL, 
ICON_NONE, ICON_INFORMATION, ICON_WARNING, ICON_CRITICAL.</translation>
    </message>
    <message>
      <source>valueDialog(caption, message [,defaultvalue]) -> string

Shows the common 'Ask for string' dialog and returns its value as a string
Parameters: window title, text in the window and optional 'default' value.

Example: valueDialog('title', 'text in the window', 'optional')
</source>
      <translation>valueDialog(caption, message [,defaultvalue]) -> string

Näyttää yleisen &quot;Kysy string&quot;-dialogin ja palauttaa sen arvon. Parametrit: ikkunan
otsikko, ikkunan teksti ja oletusarvo</translation>
    </message>
    <message>
      <source>closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</source>
      <translation>closeDoc()

Sulkee aktiivisen asiakirjan, ilman tallennusdialogia.

Saattaa heittää NoDocOpenError, jos suljettavia asiakirjoja ei ole</translation>
    </message>
    <message>
      <source>haveDoc() -> bool

Returns true if there is a document open.
</source>
      <translation>haveDoc() -> bool

Palauttaa true, jos yksikin asiakirja on avoinna.</translation>
    </message>
    <message>
      <source>openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</source>
      <translation>openDoc(&quot;name&quot;)

Avaa asiakirjan &quot;name&quot;.

Saattaa aiheuttaa ScribusErrorin, jos asiakirjaa ei voida avata.</translation>
    </message>
    <message>
      <source>saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</source>
      <translation>saveDoc()

Tallennusdialogi. Tallennuksen epäonnistumista ei voi tällä hetkellä päätellä mistään.</translation>
    </message>
    <message>
      <source>saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</source>
      <translation>saveDocAs(&quot;name&quot;)

Tallentaa aktiivisen asiakirjan nimellä &quot;nimi&quot;, joka voi olla täydellinen tai suhteellinen polku.

Saattaa aiheuttaa ScribusError:n, jos tallennus epäonnistuu.</translation>
    </message>
    <message>
      <source>saveDocAs(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -> bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
      <translation>saveDocAs(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -> bool

Asettaa asiakirjan tiedot. &quot;author&quot; (tekijä), &quot;info&quot; (tietoja) ja &quot;description&quot; (kuvaus) ovat stringejä.</translation>
    </message>
    <message>
      <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Left(lr), Right(rr), Top(tr) and Bottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type>
constants.
</source>
      <translation>setMargins(lr, rr, tr, br)

Asettaa asiakirjan reunukset Vasen (lr), Oikea (rr), ylä (tr) ja ala (br). Reunukset annetaan
asiakirjan käyttämissä yksiköissä. Katso UNIT_&lt;type> vakiot.</translation>
    </message>
    <message>
      <source>setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type>.

May raise ValueError if an invalid unit is passed.
</source>
      <translation>setUnit(type)

Vaihtaa asiakirjan mittayksikköä. Mahdolliset yksiköt on määritelty vakiona UNIT_&lt;type>.

Saattaa aiheuttaa ValueError:n, jos käytetään virheellistä yksikköä.</translation>
    </message>
    <message>
      <source>getUnit() -> integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</source>
      <translation>getUnit() -> integer (Scribus unit constant)

Palauttaa asiakirjan mittayksikön. Arvo on yksi UNIT_* vakioista.
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</translation>
    </message>
    <message>
      <source>loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</source>
      <translation>loadStylesFromFile(&quot;filename&quot;)

Lataa kappaletyylit Scribus-asiakirjasta &quot;filename&quot; aktiiviseen asiakirjaan.</translation>
    </message>
    <message>
      <source>setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</source>
      <translation>setDocType(facingPages, firstPageLeft) 
 
Sets the document type. To get facing pages set the first parameter to 
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want 
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for 
a right page use FIRSTPAGERIGHT.

</translation>
    </message>
    <message>
      <source>getLineColor([&quot;name&quot;]) -> string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation>getLineColor([&quot;name&quot;]) -> string

Palauttaa kohteen &quot;name&quot; viivan värin. Ilman &quot;name&quot;:a palauttaa
valittuna olevan kohteen kehyksen värin.</translation>
    </message>
    <message>
      <source>getLineWidth([&quot;name&quot;]) -> integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
      <translation>getLineWidth([&quot;name&quot;]) -> integer

Palauttaa kohteen &quot;name&quot; viivan leveyden. Jos &quot;name&quot;:a
ei anneta käytetään valittuna olevaa kohdetta.</translation>
    </message>
    <message>
      <source>getLineShade([&quot;name&quot;]) -> integer

Returns the shading value of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation>getLineShade([&quot;name&quot;]) -> integer

Palauttaa kohteen &quot;name&quot; viivan värin sävyn. Jos &quot;name&quot;:a ei
anneta käytetään valittuna olevaa kohdetta.</translation>
    </message>
    <message>
      <source>getLineJoin([&quot;name&quot;]) -> integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</source>
      <translation>getLineJoin([&quot;name&quot;]) -> integer (see contants)
 
Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given 
the currently selected item is used.  The join types are: 
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND 
</translation>
    </message>
    <message>
      <source>getLineEnd([&quot;name&quot;]) -> integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</source>
      <translation>getLineEnd([&quot;name&quot;]) -> integer (see constants)
 
Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the 
currently selected item is used. The cap types are: 
CAP_FLAT, CAP_ROUND, CAP_SQUARE </translation>
    </message>
    <message>
      <source>getLineStyle([&quot;name&quot;]) -> integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</source>
      <translation>getLineStyle([&quot;name&quot;]) -> integer (see constants)
 
Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the 
currently selected item is used. Line style constants are: 
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID 
</translation>
    </message>
    <message>
      <source>getFillShade([&quot;name&quot;]) -> integer

Returns the shading value of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation>getFillShade([&quot;name&quot;]) -> integer
 
Returns the shading value of the fill color of the object &quot;name&quot;. 
If &quot;name&quot; is not given the currently selected item is used.
</translation>
    </message>
    <message>
      <source>getCornerRadius([&quot;name&quot;]) -> integer

Returns the corner radius of the object &quot;name&quot;. The radius is
expressed in points. If &quot;name&quot; is not given the currently
selected item is used.
</source>
      <translation>getCornerRadius([&quot;name&quot;]) -> integer
 
Returns the corner radius of the object &quot;name&quot;. The radius is 
expressed in points. If &quot;name&quot; is not given the currently 
selected item is used.
</translation>
    </message>
    <message>
      <source>getImageScale([&quot;name&quot;]) -> (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation>getImageScale([&quot;name&quot;]) -> (x,y)
 
Returns a (x, y) tuple containing the scaling values of the image frame 
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</translation>
    </message>
    <message>
      <source>getImageName([&quot;name&quot;]) -> string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</source>
      <translation>getImageName([&quot;name&quot;]) -> string
 
Returns the filename for the image in the image frame. If &quot;name&quot; is not 
given the currently selected item is used.
</translation>
    </message>
    <message>
      <source>getPosition([&quot;name&quot;]) -> (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type> for reference.
</source>
      <translation>getPosition([&quot;name&quot;]) -> (x,y)
 
Returns a (x, y) tuple with the position of the object &quot;name&quot;. 
If &quot;name&quot; is not given the currently selected item is used. 
The position is expressed in the actual measurement unit of the document 
- see UNIT_&lt;type> for reference.
</translation>
    </message>
    <message>
      <source>getSize([&quot;name&quot;]) -> (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type>
for reference.
</source>
      <translation>getSize([&quot;name&quot;]) -> (width,height)
 
Returns a (width, height) tuple with the size of the object &quot;name&quot;. 
If &quot;name&quot; is not given the currently selected item is used. The size is 
expressed in the current measurement unit of the document - see UNIT_&lt;type> 
for reference.
</translation>
    </message>
    <message>
      <source>getRotation([&quot;name&quot;]) -> integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</source>
      <translation>getRotation([&quot;name&quot;]) -> integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees, 
and clockwise is positive. If &quot;name&quot; is not given the currently selected item 
is used.</translation>
    </message>
    <message>
      <source>getAllObjects() -> list

Returns a list containing the names of all objects on the current page.
</source>
      <translation>getAllObjects() -> list

Returns a list containing the names of all objects on the current page.</translation>
    </message>
    <message>
      <source>moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</source>
      <translation>moveObjectAbs(x, y [, &quot;name&quot;])
 
Moves the object &quot;name&quot; to a new location. The coordinates are expressed in 
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot; 
is not given the currently selected item is used.  If the object &quot;name&quot; 
belongs to a group, the whole group is moved.
</translation>
    </message>
    <message>
      <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
      <translation>rotateObject(rot [, &quot;name&quot;])
 
Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is 
rotated by the vertex that is currently selected as the rotation point - by 
default, the top left vertext at zero rotation. Positive values mean counter 
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not 
given the currently selected item is used.
</translation>
    </message>
    <message>
      <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
      <translation>rotateObjectAbs(rot [, &quot;name&quot;])
 
Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values 
mean counter clockwise rotation. If &quot;name&quot; is not given the currently 
selected item is used.
</translation>
    </message>
    <message>
      <source>sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</source>
      <translation>sizeObject(width, height [, &quot;name&quot;])
 
Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot; 
is not given the currently selected item is used.
</translation>
    </message>
    <message>
      <source>getSelectedObject([nr]) -> string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</source>
      <translation>getSelectedObject([nr]) -> string
 
Returns the name of the selected object. &quot;nr&quot; if given indicates the number 
of the selected object, e.g. 0 means the first selected object, 1 means the 
second selected Object and so on.
</translation>
    </message>
    <message>
      <source>selectionCount() -> integer

Returns the number of selected objects.
</source>
      <translation>selectionCount() -> integer
 
Returns the number of selected objects.
</translation>
    </message>
    <message>
      <source>selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</source>
      <translation>selectObject(&quot;name&quot;)
 
Selects the object with the given &quot;name&quot;.
</translation>
    </message>
    <message>
      <source>deselectAll()

Deselects all objects in the whole document.
</source>
      <translation>deselectAll()
 
Deselects all objects in the whole document.
</translation>
    </message>
    <message>
      <source>groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</source>
      <translation>groupObjects(list)
 
Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names 
of the objects to be grouped. If &quot;list&quot; is not given the currently selected 
items are used.
</translation>
    </message>
    <message>
      <source>unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</source>
      <translation>unGroupObjects(&quot;name&quot;)
 
Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.
</translation>
    </message>
    <message>
      <source>scaleGroup(factor [,&quot;name&quot;])

Scales the group the object &quot;name&quot; belongs to. Values greater than 1 enlarge
the group, values smaller than 1 make the group smaller e.g a value of 0.5
scales the group to 50 % of its original size, a value of 1.5 scales the group
to 150 % of its original size.  The value for &quot;factor&quot; must be greater than
0. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if an invalid scale factor is passed.
</source>
      <translation>scaleGroup(factor [,&quot;name&quot;])
 
Scales the group the object &quot;name&quot; belongs to. Values greater than 1 enlarge 
the group, values smaller than 1 make the group smaller e.g a value of 0.5 
scales the group to 50 % of its original size, a value of 1.5 scales the group 
to 150 % of its original size.  The value for &quot;factor&quot; must be greater than 
0. If &quot;name&quot; is not given the currently selected item is used. 
 
May raise ValueError if an invalid scale factor is passed.
</translation>
    </message>
    <message>
      <source>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
      <translation>loadImage(&quot;filename&quot; [, &quot;name&quot;])
 
Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is 
not given the currently selected item is used. 
 
May raise WrongFrameTypeError if the target frame is not an image frame
</translation>
    </message>
    <message>
      <source>scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
      <translation>scaleImage(x, y [, &quot;name&quot;])
 
Sets the scaling factors of the picture in the image frame &quot;name&quot;. 
If &quot;name&quot; is not given the currently selected item is used. A number of 1 
means 100 %. 
 
May raise WrongFrameTypeError if the target frame is not an image frame 
</translation>
    </message>
    <message>
      <source>lockObject([&quot;name&quot;]) -> bool

Locks the object &quot;name&quot; if it's unlocked or unlock it if it's locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</source>
      <translation>lockObject([&quot;name&quot;]) -> bool
 
Locks the object &quot;name&quot; if it's unlocked or unlock it if it's locked. 
If &quot;name&quot; is not given the currently selected item is used. Returns true 
if locked.
</translation>
    </message>
    <message>
      <source>isLocked([&quot;name&quot;]) -> bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</source>
      <translation>isLocked([&quot;name&quot;]) -> bool
 
Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the 
currently selected item is used. 
</translation>
    </message>
    <message>
      <source>getFontNames() -> list

Returns a list with the names of all available fonts.
</source>
      <translation>getFontNames() -> list
 
Returns a list with the names of all available fonts. 
</translation>
    </message>
    <message>
      <source>getXFontNames() -> list of tuples

Returns a larger font info. It's a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</source>
      <translation>getXFontNames() -> list of tuples
 
Returns a larger font info. It's a list of the tuples with: 
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ] 
</translation>
    </message>
    <message>
      <source>getLayers() -> list

Returns a list with the names of all defined layers.
</source>
      <translation>getLayers() -> list

 
Returns a list with the names of all defined layers. </translation>
    </message>
    <message>
      <source>setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation>setActiveLayer(&quot;name&quot;)
 
Sets the active layer to the layer named &quot;name&quot;. 
 
May raise NotFoundError if the layer can't be found. 
May raise ValueError if the layer name isn't acceptable. 
</translation>
    </message>
    <message>
      <source>getActiveLayer() -> string

Returns the name of the current active layer.
</source>
      <translation>getActiveLayer() -> string
 
Returns the name of the current active layer. 
</translation>
    </message>
    <message>
      <source>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])
 
Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist. 
If &quot;name&quot; is not given the currently selected item is used. 
 
May raise NotFoundError if the layer can't be found. 
May raise ValueError if the layer name isn't acceptable. 
</translation>
    </message>
    <message>
      <source>setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation>setLayerVisible(&quot;layer&quot;, visible)
 
Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false 
the layer is invisible. 
 
May raise NotFoundError if the layer can't be found. 
May raise ValueError if the layer name isn't acceptable. 
</translation>
    </message>
    <message>
      <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the printable set to
false the layer won't be printed.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation>setLayerPrintable(&quot;layer&quot;, printable)
 
Sets the layer &quot;layer&quot; to be printable or not. If is the printable set to 
false the layer won't be printed. 
 
May raise NotFoundError if the layer can't be found. 
May raise ValueError if the layer name isn't acceptable. 
</translation>
    </message>
    <message>
      <source>deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn't
exists or if it's the only layer in the document.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation>deleteLayer(&quot;layer&quot;)

 
Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn't 
exists or if it's the only layer in the document. 
 
May raise NotFoundError if the layer can't be found. 
May raise ValueError if the layer name isn't acceptable. </translation>
    </message>
    <message>
      <source>createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn't acceptable.
</source>
      <translation>createLayer(layer)
 
Creates a new layer with the name &quot;name&quot;. 
 
May raise ValueError if the layer name isn't acceptable. 
</translation>
    </message>
    <message>
      <source>getGuiLanguage() -> string

Returns a string with the -lang value.
</source>
      <translation>getGuiLanguage() -> string
 
Returns a string with the -lang value. 
</translation>
    </message>
    <message>
      <source>createEllipse(x, y, width, height, [&quot;name&quot;]) -> string

Creates a new ellipse on the current page and returns its name.
The coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name for further referencing of that object. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
</source>
      <translation>createEllipse(x, y, width, height, [&quot;name&quot;]) -> string
 
Creates a new ellipse on the current page and returns its name. 
The coordinates are given in the current measurement units of the document 
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object 
because you need this name for further referencing of that object. If &quot;name&quot; 
is not given Scribus will create one for you. 
 
May raise NameExistsError if you explicitly pass a name that's already used. 
</translation>
    </message>
    <message>
      <source>createImage(x, y, width, height, [&quot;name&quot;]) -> string

Creates a new picture frame on the current page and returns its name. The
coordinates are given in the current measurement units of the document.
&quot;name&quot; should be a unique identifier for the object because you need this
name for further access to that object. If &quot;name&quot; is not given Scribus will
create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
</source>
      <translation>createImage(x, y, width, height, [&quot;name&quot;]) -> string
 
Creates a new picture frame on the current page and returns its name. The 
coordinates are given in the current measurement units of the document. 
&quot;name&quot; should be a unique identifier for the object because you need this 
name for further access to that object. If &quot;name&quot; is not given Scribus will 
create one for you. 
 
May raise NameExistsError if you explicitly pass a name that's already used. 
</translation>
    </message>
    <message>
      <source>createText(x, y, width, height, [&quot;name&quot;]) -> string

Creates a new text frame on the actual page and returns its name.
The coordinates are given in the actual measurement unit of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further referencing of that object. If &quot;name&quot; is not
given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
</source>
      <translation>createText(x, y, width, height, [&quot;name&quot;]) -> string
 
Creates a new text frame on the actual page and returns its name. 
The coordinates are given in the actual measurement unit of the document (see 
UNIT constants). &quot;name&quot; should be a unique identifier for the object because 
you need this name for further referencing of that object. If &quot;name&quot; is not 
given Scribus will create one for you. 
 
May raise NameExistsError if you explicitly pass a name that's already used. 
</translation>
    </message>
    <message>
      <source>createLine(x1, y1, x2, y2, [&quot;name&quot;]) -> string

Creates a new line from the point(x1, y1) to the point(x2, y2) and returns
its name. The coordinates are given in the current measurement unit of the
document (see UNIT constants). &quot;name&quot; should be a unique identifier for the
object because you need this name for further access to that object. If
&quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
</source>
      <translation>createLine(x1, y1, x2, y2, [&quot;name&quot;]) -> string
 
Creates a new line from the point(x1, y1) to the point(x2, y2) and returns 
its name. The coordinates are given in the current measurement unit of the 
document (see UNIT constants). &quot;name&quot; should be a unique identifier for the 
object because you need this name for further access to that object. If 
&quot;name&quot; is not given Scribus will create one for you. 
 
May raise NameExistsError if you explicitly pass a name that's already used. 
</translation>
    </message>
    <message>
      <source>createPolyLine(list, [&quot;name&quot;]) -> string

Creates a new polyline and returns its name. The points for the polyline are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
The coordinates are given in the current measurement units of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further access to that object. If &quot;name&quot; is not given
Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don't group into points without leftovers.
</source>
      <translation>createPolyLine(list, [&quot;name&quot;]) -> string
 
Creates a new polyline and returns its name. The points for the polyline are 
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn]. 
The coordinates are given in the current measurement units of the document (see 
UNIT constants). &quot;name&quot; should be a unique identifier for the object because 
you need this name for further access to that object. If &quot;name&quot; is not given 
Scribus will create one for you. 
 
May raise NameExistsError if you explicitly pass a name that's already used. 
May raise ValueError if an insufficient number of points is passed or if 
the number of values passed don't group into points without leftovers. 
</translation>
    </message>
    <message>
      <source>createPolygon(list, [&quot;name&quot;]) -> string

Creates a new polygon and returns its name. The points for the polygon are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
At least three points are required. There is no need to repeat the first point
to close the polygon. The polygon is automatically closed by connecting the
first and the last point.  The coordinates are given in the current measurement
units of the document (see UNIT constants).  &quot;name&quot; should be a unique
identifier for the object because you need this name for further access to that
object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don't group into points without leftovers.
</source>
      <translation>createPolygon(list, [&quot;name&quot;]) -> string
 
Creates a new polygon and returns its name. The points for the polygon are 
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn]. 
At least three points are required. There is no need to repeat the first point 
to close the polygon. The polygon is automatically closed by connecting the 
first and the last point.  The coordinates are given in the current measurement 
units of the document (see UNIT constants).  &quot;name&quot; should be a unique 
identifier for the object because you need this name for further access to that 
object. If &quot;name&quot; is not given Scribus will create one for you. 
 
May raise NameExistsError if you explicitly pass a name that's already used. 
May raise ValueError if an insufficient number of points is passed or if 
the number of values passed don't group into points without leftovers. 
</translation>
    </message>
    <message>
      <source>createBezierLine(list, [&quot;name&quot;]) -> string

Creates a new bezier curve and returns its name. The points for the bezier
curve are stored in the list &quot;list&quot; in the following order:
[x1, y1, kx1, ky1, x2, y2, kx2, ky2...xn. yn, kxn. kyn]
In the points list, x and y mean the x and y coordinates of the point and kx
and ky meaning the control point for the curve.  The coordinates are given in
the current measurement units of the document (see UNIT constants). &quot;name&quot;
should be a unique identifier for the object because you need this name for
further access to that object. If &quot;name&quot; is not given Scribus will create one
for you.

May raise NameExistsError if you explicitly pass a name that's already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don't group into points without leftovers.
</source>
      <translation>createBezierLine(list, [&quot;name&quot;]) -> string

 
Creates a new bezier curve and returns its name. The points for the bezier 
curve are stored in the list &quot;list&quot; in the following order: 
[x1, y1, kx1, ky1, x2, y2, kx2, ky2...xn. yn, kxn. kyn] 
In the points list, x and y mean the x and y coordinates of the point and kx 
and ky meaning the control point for the curve.  The coordinates are given in 
the current measurement units of the document (see UNIT constants). &quot;name&quot; 
should be a unique identifier for the object because you need this name for 
further access to that object. If &quot;name&quot; is not given Scribus will create one 
for you. 
 
May raise NameExistsError if you explicitly pass a name that's already used. 
May raise ValueError if an insufficient number of points is passed or if 
the number of values passed don't group into points without leftovers. </translation>
    </message>
    <message>
      <source>createPathText(x, y, &quot;textbox&quot;, &quot;beziercurve&quot;, [&quot;name&quot;]) -> string

Creates a new pathText by merging the two objects &quot;textbox&quot; and
&quot;beziercurve&quot; and returns its name. The coordinates are given in the current
measurement unit of the document (see UNIT constants). &quot;name&quot; should be a
unique identifier for the object because you need this name for further access
to that object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
May raise NotFoundError if one or both of the named base object don't exist.
</source>
      <translation>createPathText(x, y, &quot;textbox&quot;, &quot;beziercurve&quot;, [&quot;name&quot;]) -> string
 
Creates a new pathText by merging the two objects &quot;textbox&quot; and 
&quot;beziercurve&quot; and returns its name. The coordinates are given in the current 
measurement unit of the document (see UNIT constants). &quot;name&quot; should be a 
unique identifier for the object because you need this name for further access 
to that object. If &quot;name&quot; is not given Scribus will create one for you. 
 
May raise NameExistsError if you explicitly pass a name that's already used. 
May raise NotFoundError if one or both of the named base object don't exist. 
</translation>
    </message>
    <message>
      <source>deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</source>
      <translation>deleteObject([&quot;name&quot;])

 
Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently 
selected item is deleted. </translation>
    </message>
    <message>
      <source>textFlowsAroundFrame(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional boolean &quot;state&quot;. If &quot;state&quot;
is not passed, text flow is toggled.
</source>
      <translation>textFlowsAroundFrame(&quot;name&quot; [, state])
 
Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;. 
Called with parameters string name and optional boolean &quot;state&quot;. If &quot;state&quot; 
is not passed, text flow is toggled. 
</translation>
    </message>
    <message>
      <source>objectExists([&quot;name&quot;]) -> bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</source>
      <translation>objectExists([&quot;name&quot;]) -> bool
 
Test if an object with specified name really exists in the document. 
The optional parameter is the object name. When no object name is given, 
returns True if there is something selected. 
</translation>
    </message>
    <message>
      <source>setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it's applied on the selected object.
</source>
      <translation>setStyle(&quot;style&quot; [, &quot;name&quot;])
 
Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name 
given, it's applied on the selected object. 
</translation>
    </message>
    <message>
      <source>getAllStyles() -> list

Return a list of the names of all paragraph styles in the current document.
</source>
      <translation>getAllStyles() -> list
 
Return a list of the names of all paragraph styles in the current document. 
</translation>
    </message>
    <message>
      <source>currentPage() -> integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</source>
      <translation>currentPage() -> integer
 
Returns the number of the current working page. Page numbers are counted from 1 
upwards, no matter what the displayed first page number of your document is. 
</translation>
    </message>
    <message>
      <source>redrawAll()

Redraws all pages.
</source>
      <translation>redrawAll()
 
Redraws all pages. 
</translation>
    </message>
    <message>
      <source>savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</source>
      <translation>savePageAsEPS(&quot;name&quot;)
 
Saves the current page as an EPS to the file &quot;name&quot;. 
 
May raise ScribusError if the save failed. 
</translation>
    </message>
    <message>
      <source>deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</source>
      <translation>deletePage(nr)
 
Deletes the given page. Does nothing if the document contains only one page. 
Page numbers are counted from 1 upwards, no matter what the displayed first 
page number is. 
 
May raise IndexError if the page number is out of range 
</translation>
    </message>
    <message>
      <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn't (curently) change the page the user's view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</source>
      <translation>gotoPage(nr)
 
Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that 
gotoPage doesn't (curently) change the page the user's view is displaying, it 
just sets the page that script commands will operates on. 
 
May raise IndexError if the page number is out of range. 
</translation>
    </message>
    <message>
      <source>pageCount() -> integer

Returns the number of pages in the document.
</source>
      <translation>pageCount() -> integer
 
Returns the number of pages in the document. 
</translation>
    </message>
    <message>
      <source>getHGuides() -> list

Returns a list containing positions of the horizontal guides. Values are in the
document's current units - see UNIT_&lt;type> constants.
</source>
      <translation>getHGuides() -> list
 
Returns a list containing positions of the horizontal guides. Values are in the 
document's current units - see UNIT_&lt;type> constants. 
</translation>
    </message>
    <message>
      <source>setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type> constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</source>
      <translation>setHGuides(list)
 
Sets horizontal guides. Input parameter must be a list of guide positions 
measured in the current document units - see UNIT_&lt;type> constants. 
 
Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost 
         setHGuides([90,250]) # replace current guides entirely 
</translation>
    </message>
    <message>
      <source>getVGuides()

See getHGuides.
</source>
      <translation>getVGuides()
 
See getHGuides. 
</translation>
    </message>
    <message>
      <source>setVGuides()

See setHGuides.
</source>
      <translation>setVGuides()

 
See setHGuides. </translation>
    </message>
    <message>
      <source>getPageSize() -> tuple

Returns a tuple with page dimensions measured in the document's current units.
See UNIT_&lt;type> constants and getPageMargins()
</source>
      <translation>getPageSize() -> tuple
 
Returns a tuple with page dimensions measured in the document's current units. 
See UNIT_&lt;type> constants and getPageMargins() 
</translation>
    </message>
    <message>
      <source>getPageItems() -> list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [('Text1', 4, 0), ('Image1', 2, 1)]
means that object named 'Text1' is a text frame (type 4) and is the first at
the page...
</source>
      <translation>getPageItems() -> list
 
Returns a list of tuples with items on the current page. The tuple is: 
(name, objectType, order) E.g. [('Text1', 4, 0), ('Image1', 2, 1)] 
means that object named 'Text1' is a text frame (type 4) and is the first at 
the page... 
</translation>
    </message>
    <message>
      <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
      <translation>setFillColor(&quot;color&quot;, [&quot;name&quot;])
 
Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot; 
is the name of one of the defined colors. If &quot;name&quot; is not given the 
currently selected item is used. 
</translation>
    </message>
    <message>
      <source>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</source>
      <translation>setLineColor(&quot;color&quot;, [&quot;name&quot;])
 
Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot; 
is not given the currently selected item is used. 
</translation>
    </message>
    <message>
      <source>setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</source>
      <translation>setLineWidth(width, [&quot;name&quot;])
 
Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the 
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not 
given the currently selected item is used. 
 
May raise ValueError if the line width is out of bounds. 
</translation>
    </message>
    <message>
      <source>setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full color intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</source>
      <translation>setLineShade(shade, [&quot;name&quot;])
 
Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;. 
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100 
(full color intensity). If &quot;name&quot; is not given the currently selected item 
is used. 
 
May raise ValueError if the line shade is out of bounds. 
</translation>
    </message>
    <message>
      <source>setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type>.
</source>
      <translation>setLineJoin(join, [&quot;name&quot;])
 
Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;. 
If &quot;name&quot; is not given the currently selected item is used. There are 
predefined constants for join - JOIN_&lt;type>. 
</translation>
    </message>
    <message>
      <source>setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type>.
</source>
      <translation>setLineEnd(endtype, [&quot;name&quot;])
 
Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;. 
If &quot;name&quot; is not given the currently selected item is used. There are 
predefined constants for &quot;cap&quot; - CAP_&lt;type>. 
</translation>
    </message>
    <message>
      <source>setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style>.
</source>
      <translation>setLineStyle(style, [&quot;name&quot;])
 
Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot; 
is not given the currently selected item is used. There are predefined 
constants for &quot;style&quot; - LINE_&lt;style>. 
</translation>
    </message>
    <message>
      <source>setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Color intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</source>
      <translation>setFillShade(shade, [&quot;name&quot;])
 
Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;. 
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100 
(full Color intensity). If &quot;name&quot; is not given the currently selected 
Item is used. 
 
May raise ValueError if the fill shade is out of bounds. 
</translation>
    </message>
    <message>
      <source>setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</source>
      <translation>setCornerRadius(radius, [&quot;name&quot;])

 
Sets the corner radius of the object &quot;name&quot;. The radius is expressed 
in points. If &quot;name&quot; is not given the currently selected item is used. 
 
May raise ValueError if the corner radius is negative. </translation>
    </message>
    <message>
      <source>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn't exist.
</source>
      <translation>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])
 
Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;. 
If &quot;name&quot; is not given the currently selected item is used. 
 
May raise NotFoundError if the line style doesn't exist. 
</translation>
    </message>
    <message>
      <source>getFont([&quot;name&quot;]) -> string

Returns the font name for the text frame &quot;name&quot;. If this text frame
has some text selected the value assigned to the first character
of the selection is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
      <translation>getFont([&quot;name&quot;]) -> string
 
Returns the font name for the text frame &quot;name&quot;. If this text frame 
has some text selected the value assigned to the first character 
of the selection is returned. If &quot;name&quot; is not given the currently 
selected item is used. 
</translation>
    </message>
    <message>
      <source>getTextLength([&quot;name&quot;]) -> integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation>getTextLength([&quot;name&quot;]) -> integer
 
Returns the length of the text in the text frame &quot;name&quot;. 
If &quot;name&quot; is not given the currently selected item is used. 
</translation>
    </message>
    <message>
      <source>getText([&quot;name&quot;]) -> string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
      <translation>getText([&quot;name&quot;]) -> string
 
Returns the text of the text frame &quot;name&quot;. If this text frame has some text 
selected, the selected text is returned. All text in the frame, not just 
currently visible text, is returned. If &quot;name&quot; is not given the currently 
selected item is used. 
</translation>
    </message>
    <message>
      <source>getAllText([&quot;name&quot;]) -> string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</source>
      <translation>getAllText([&quot;name&quot;]) -> string

 
Returns the text of the text frame &quot;name&quot; and of all text frames which are 
linked with this frame. If this textframe has some text selected, the selected 
text is returned. If &quot;name&quot; is not given the currently selected item is 
used. </translation>
    </message>
    <message>
      <source>getLineSpacing([&quot;name&quot;]) -> float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation>getLineSpacing([&quot;name&quot;]) -> float
 
Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in 
points. If &quot;name&quot; is not given the currently selected item is used. 
</translation>
    </message>
    <message>
      <source>getColumnGap([&quot;name&quot;]) -> float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</source>
      <translation>getColumnGap([&quot;name&quot;]) -> float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If 
&quot;name&quot; is not given the currently selected item is used. </translation>
    </message>
    <message>
      <source>getColumns([&quot;name&quot;]) -> integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</source>
      <translation>getColumns([&quot;name&quot;]) -> integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not 
given the currently selected item is used. </translation>
    </message>
    <message>
      <source>setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, 'iso-8859-2'). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</source>
      <translation>setText(&quot;text&quot;, [&quot;name&quot;])
 
Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;. 
Text must be UTF8 encoded - use e.g. unicode(text, 'iso-8859-2'). See the FAQ 
for more details. If &quot;name&quot; is not given the currently selected item is 
used. 
</translation>
    </message>
    <message>
      <source>setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</source>
      <translation>setFont(&quot;font&quot;, [&quot;name&quot;])
 
Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text 
selected only the selected text is changed.  If &quot;name&quot; is not given the 
currently selected item is used. 
 
May throw ValueError if the font cannot be found. </translation>
    </message>
    <message>
      <source>setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that's out of bounds.
</source>
      <translation>setFontSize(size, [&quot;name&quot;])
 
Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated 
as a value in points. If there is some text selected only the selected text is 
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the 
currently selected item is used. 
 
May throw ValueError for a font size that's out of bounds. e(size, [&quot;name&quot;]).</translation>
    </message>
    <message>
      <source>setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</source>
      <translation>setLineSpacing(size, [&quot;name&quot;])
 
Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;. 
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected 
item is used. 
 
May throw ValueError if the line spacing is out of bounds. </translation>
    </message>
    <message>
      <source>setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</source>
      <translation>setColumnGap(size, [&quot;name&quot;])
 
Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If 
&quot;name&quot; is not given the currently selected item is used. 
 
May throw ValueError if the column gap is out of bounds (must be positive). </translation>
    </message>
    <message>
      <source>setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</source>
      <translation>setColumns(nr, [&quot;name&quot;])
 
Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;. 
If &quot;name&quot; is not given the currently selected item is used. 
 
May throw ValueError if number of columns is not at least one. </translation>
    </message>
    <message>
      <source>setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</source>
      <translation>setTextAlignment(align, [&quot;name&quot;])
 
Sets the text alignment of the text frame &quot;name&quot; to the specified alignment. 
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should 
be one of the ALIGN_ constants defined in this module - see dir(scribus). 
 
May throw ValueError for an invalid alignment constant. </translation>
    </message>
    <message>
      <source>deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</source>
      <translation>deleteText([&quot;name&quot;])

 
Deletes any text in the text frame &quot;name&quot;. If there is some text selected, 
only the selected text will be deleted. If &quot;name&quot; is not given the currently 
selected item is used. </translation>
    </message>
    <message>
      <source>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</source>
      <translation>setTextColor(&quot;color&quot;, [&quot;name&quot;])
 
Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there 
is some text selected only the selected text is changed. If &quot;name&quot; is not 
given the currently selected item is used. 
</translation>
    </message>
    <message>
      <source>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</source>
      <translation>setTextStroke(&quot;color&quot;, [&quot;name&quot;])
 
Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently 
selected item is used. 
</translation>
    </message>
    <message>
      <source>setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full color
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</source>
      <translation>setTextShade(shade, [&quot;name&quot;])
 
Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If 
there is some text selected only the selected text is changed. &quot;shade&quot; must 
be an integer value in the range from 0 (lightest) to 100 (full color 
intensity). If &quot;name&quot; is not given the currently selected item is 
used. 
</translation>
    </message>
    <message>
      <source>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</source>
      <translation>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)
 
Link two text frames. The frame named &quot;fromname&quot; is linked to the 
frame named &quot;toname&quot;. The target frame must be an empty text frame 
and must not link to or be linked from any other frames already. 
 
May throw ScribusException if linking rules are violated. 
</translation>
    </message>
    <message>
      <source>unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg 'a->b->c' becomes 'a->c' when you unlinkTextFrames(b)'

May throw ScribusException if linking rules are violated.
</source>
      <translation>unlinkTextFrames(&quot;name&quot;)
 
Remove the specified (named) object from the text frame flow/linkage. If the 
frame was in the middle of a chain, the previous and next frames will be 
connected, eg 'a->b->c' becomes 'a->c' when you unlinkTextFrames(b)' 
 
May throw ScribusException if linking rules are violated. 
</translation>
    </message>
    <message>
      <source>traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</source>
      <translation>traceText([&quot;name&quot;])

Muuta tekstikehys &quot;name&quot; ääriviivoiksi. Jos nimeä ei anneta, käytetään
valittuna olevaa kohdetta.</translation>
    </message>
    <message>
      <source>progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</source>
      <translation>progressReset()

Tyhjentää etenemispalkin (progress bar). Katso progressSet.</translation>
    </message>
    <message>
      <source>progressTotal(max)

Sets the progress bar's maximum steps value to the specified number.
See progressSet.
</source>
      <translation>progressTotal(max)

Asettaa etenemispalkin suurimman mahdollisen arvon. Katso progressSet.</translation>
    </message>
    <message>
      <source>progressSet(nr)

Set the progress bar position to &quot;nr&quot;, a value relative to the previously set
progressTotal. The progress bar uses the concept of steps; you give it the
total number of steps and the number of steps completed so far and it will
display the percentage of steps that have been completed. You can specify the
total number of steps with progressTotal(). The current number of steps is set
with progressSet(). The progress bar can be rewound to the beginning with
progressReset(). [based on info taken from Trolltech's Qt docs]
</source>
      <translation>progressSet(nr)

Aseta etenemispalkki nr:n osoittamaan tilaan.
The progress bar uses the concept of steps; you give it the
total number of steps and the number of steps completed so far and it will
display the percentage of steps that have been completed. You can specify the
total number of steps with progressTotal(). The current number of steps is set
with progressSet(). The progress bar can be rewound to the beginning with
progressReset(). [based on info taken from Trolltech's Qt docs]</translation>
    </message>
    <message>
      <source>setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</source>
      <translation>setCursor()

[Ei tuettu!] Tämä saattaa rikkoa asoita. Eli älä käytä ainakaan vielä.</translation>
    </message>
    <message>
      <source>docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It's
useful to call this procedure when you're changing the document, because Scribus
won't automatically notice when you change the document using a script.
</source>
      <translation>docChanged(bool)

Ota käyttöön/Poista käytöstä tallennuskuvake työkalurivillä ja Tiedosto-valikossa.
On hyvä kutsua tätä funktiota, kun olet muokannut asiakirjaa. Scribus ei huomaa 
automaattisesti skriptin tekemiä muutoksia.</translation>
    </message>
    <message>
      <source>getColorAsRGB(&quot;name&quot;) -> tuple

Returns a tuple (R,G,B) containing the three color components of the
color &quot;name&quot; from the current document, converted to the RGB colour
space. If no document is open, returns the value of the named color
from the default document colors.

May raise NotFoundError if the named color wasn't found.
May raise ValueError if an invalid color name is specified.
</source>
      <translation>getColorAsRGB(&quot;name&quot;) -> tuple 
 
Returns a tuple (R,G,B) containing the three color components of the 
color &quot;name&quot; from the current document, converted to the RGB colour 
space. If no document is open, returns the value of the named color 
from the default document colors. 
 
May raise NotFoundError if the named color wasn't found. 
May raise ValueError if an invalid color name is specified. </translation>
    </message>
    <message>
      <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection>)

Sets the scale to frame on the selected or specified image frame to `scaletoframe'.
If `proportional' is specified, set fixed aspect ratio scaling to `proportional'.
Both `scaletoframe' and `proportional' are boolean.

May raise WrongFrameTypeError.
</source>
      <translation>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection>) 
 
Sets the scale to frame on the selected or specified image frame to `scaletoframe'. 
If `proportional' is specified, set fixed aspect ratio scaling to `proportional'. 
Both `scaletoframe' and `proportional' are boolean. 
 
May raise WrongFrameTypeError. </translation>
    </message>
    <message>
      <source>renderFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size, format=&quot;PPM&quot;) -> bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
If &quot;filename&quot; is not &quot;&quot;, image is saved into &quot;filename&quot;. Otherwise
image data is returned as a string. The optional &quot;format&quot; argument
specifies the image format to generate, and supports any format allowed
by QPixmap.save(). Common formats are PPM, JPEG, PNG and XPM.

May raise NotFoundError if the specified font can't be found.
May raise ValueError if an empty sample or filename is passed.
</source>
      <translation>renderFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size, format=&quot;PPM&quot;) -> bool 
 
Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size. 
If &quot;filename&quot; is not &quot;&quot;, image is saved into &quot;filename&quot;. Otherwise 
image data is returned as a string. The optional &quot;format&quot; argument 
specifies the image format to generate, and supports any format allowed 
by QPixmap.save(). Common formats are PPM, JPEG, PNG and XPM. 
 
May raise NotFoundError if the specified font can't be found. 
May raise ValueError if an empty sample or filename is passed. </translation>
    </message>
    <message>
      <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared. If &quot;count&quot; is -1, all text in the frame will
be selected. If &quot;name&quot; is not given the currently selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
      <translation>selectText(start, count, [&quot;name&quot;]) 
 
Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the 
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any 
text selection will be cleared. If &quot;count&quot; is -1, all text in the frame will 
be selected. If &quot;name&quot; is not given the currently selected item is used. 
 
May throw IndexError if the selection is outside the bounds of the text. </translation>
    </message>
    <message>
      <source>register_macro_code(name, sourcetext, accel='')

Create a macro named &quot;name&quot; by evaluating the the source code &quot;sourcetext&quot;.
&quot;sourcetext&quot; must follow the same rules as macros created in the GUI.
If provided, the string &quot;accel&quot; will be used to set a keyboard shortcut
for the macro.
</source>
      <translation>register_macro_code(name, sourcetext, accel='') 
 
Create a macro named &quot;name&quot; by evaluating the the source code &quot;sourcetext&quot;. 
&quot;sourcetext&quot; must follow the same rules as macros created in the GUI. 
If provided, the string &quot;accel&quot; will be used to set a keyboard shortcut 
for the macro. </translation>
    </message>
    <message>
      <source>isLayerVisible(&quot;layer&quot;) -> bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation>isLayerVisible(&quot;layer&quot;) -> bool 
 
Returns whether the layer &quot;layer&quot; is visible or not, a value of True means 
that the layer &quot;layer&quot; is visible, a value of False means that the layer 
&quot;layer&quot; is invisible. 
 
May raise NotFoundError if the layer can't be found. 
May raise ValueError if the layer name isn't acceptable. </translation>
    </message>
    <message>
      <source>isLayerPrintable(&quot;layer&quot;) -> bool

Returns whether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation>isLayerPrintable(&quot;layer&quot;) -> bool 
 
Returns whether the layer &quot;layer&quot; is printable or not, a value of True means 
that the layer &quot;layer&quot; can be printed, a value of False means that printing 
the layer &quot;layer&quot; is disabled. 
 
May raise NotFoundError if the layer can't be found. 
May raise ValueError if the layer name isn't acceptable. </translation>
    </message>
    <message>
      <source>setPDFBookmark(&quot;toggle&quot;, [&quot;name&quot;])

Sets wether (toggle = 1) the text frame &quot;name&quot; is a bookmark nor not.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
      <translation>setPDFBookmark(&quot;toggle&quot;, [&quot;name&quot;]) 
 
Sets wether (toggle = 1) the text frame &quot;name&quot; is a bookmark nor not. 
If &quot;name&quot; is not given the currently selected item is used. 
 
May raise WrongFrameTypeError if the target frame is not a text frame </translation>
    </message>
    <message>
      <source>isPDFBookmark([&quot;name&quot;]) -> bool

Returns true if the text frame &quot;name&quot; is a PDF bookmark.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
      <translation>isPDFBookmark([&quot;name&quot;]) -> bool 
 
Returns true if the text frame &quot;name&quot; is a PDF bookmark. 
If &quot;name&quot; is not given the currently selected item is used. 
 
May raise WrongFrameTypeError if the target frame is not a text frame </translation>
    </message>
    <message>
      <source>getPageMargins()

Returns the page margins as a (top, left, right, bottom) tuple in the current
units. See UNIT_&lt;type> constants and getPageSize().
</source>
      <translation>getPageMargins() 
 
Returns the page margins as a (top, left, right, bottom) tuple in the current 
units. See UNIT_&lt;type> constants and getPageSize(). </translation>
    </message>
    <message>
      <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference). The first character has
an index of 0. Inserting at position -1 appends text to the frame. If &quot;name&quot;
is not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.
</source>
      <translation>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference). The first character has
an index of 0. Inserting at position -1 appends text to the frame. If &quot;name&quot;
is not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.</translation>
    </message>
    <message>
      <source>newDoc(size, margins, orientation, firstPageNumber,
                   unit, facingPages, firstSideLeft) -> bool

Creates a new document and returns true if successful. The parameters have the
following meaning:

    size = A tuple (width, height) describing the size of the document. You can
    use predefined constants named PAPER_&lt;paper_type> e.g. PAPER_A4 etc.

    margins = A tuple (left, right, top, bottom) describing the document
    margins

    orientation = the page orientation - constants PORTRAIT, LANDSCAPE

    firstPageNumber = is the number of the first page in the document used for
    pagenumbering. While you'll usually want 1, it's useful to have higher
    numbers if you're creating a document in several parts.

    unit: this value sets the measurement units used by the document. Use a
    predefined constant for this, one of: UNIT_INCHES, UNIT_MILLIMETERS,
    UNIT_PICAS, UNIT_POINTS.

    facingPages = FACINGPAGES, NOFACINGPAGES

    firstSideLeft = FIRSTPAGELEFT, FIRSTPAGERIGHT

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDoc(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 1, UNIT_POINTS,
                FACINGPAGES, FIRSTPAGERIGHT)
</source>
      <translation>newDoc(size, margins, orientation, firstPageNumber,
                    unit, facingPages, firstSideLeft) -> bool

Luo uuden asiakirjan ja palauttaa true, jos se onnistuu. Parametreillä on seuraavat
merkitykset:

    size = Tuple (leveys, korkeus) kuvaa asiakirjan koon. Voit käyttää valmiiksi
    määriteltyjä vakioita PAPER_&lt;paperin tyyppi> esim. PAPER_A4 jne.

    margins = Tuple (vasen, oikea, ylä, ala) kuva asiakirjan reunukset.

    orientation = Sivun suunta -  vakiot PORTRAIT, LANDSCAPE (pystysuora, vaakasuora).

    firstPageNumber = Asiakirjan ensimmäisellä sivulla käytettävä sivunumero. Hyödyllinen
    Hyödyllinen esimerkiksi luotaessa asikirja useassa osassa.

    unit: Asikirjassa käytettävä mittayksikkö. Käytä valmiiksi määriteltyjä vakioita: 
    UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.

    facingPages = FACINGPAGES (vastakkaiset sivut), NOFACINGPAGES (peräkkäiset sivut)

    firstSideLeft = FIRSTPAGELEFT (ensimmäinen sivu vasen), FIRSTPAGERIGHT (oikea)

Leveys, korkeus ja reunukset tulee antaa asikirjassa käytössä olevalla yksiköllä.
PAPER_*-vakiot annetaan pisteinä (points). Jos asikirjasi ei ole pisteissä, huomioi
tämä.

example: newDoc(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 1, UNIT_POINTS,
                FACINGPAGES, FIRSTPAGERIGHT)
</translation>
    </message>
    <message>
      <source>textOverflows([&quot;name&quot;, nolinks]) -> integer

Returns the actual number of overflowing characters in text frame &quot;name&quot;.
If is nolinks set to non zero value it takes only one frame - it doesn't
use text frame linking. Without this parameter it search all linking chain.

May raise WrongFrameTypeError if the target frame is not an text frame
</source>
      <translation>textOverflows([&quot;name&quot;, nolinks]) -> integer

Returns the actual number of overflowing characters in text frame &quot;name&quot;.
If is nolinks set to non zero value it takes only one frame - it doesn't
use text frame linking. Without this parameter it search all linking chain.

May raise WrongFrameTypeError if the target frame is not an text frame
</translation>
    </message>
    <message>
      <source>zoomDocument(double)

Zoom the document in main GUI window. Actions have whole number
values like 20.0, 100.0, etc. Zoom to Fit uses -100 as a marker.
</source>
      <translation>zoomDocument(double)

Zoom the document in main GUI window. Actions have whole number
values like 20.0, 100.0, etc. Zoom to Fit uses -100 as a marker.
</translation>
    </message>
  </context>
  <context>
    <name>About</name>
    <message>
      <source>Build-ID:</source>
      <translation>Käännöstunnus:</translation>
    </message>
    <message>
      <source>Brazilian:</source>
      <translation>Brasilia:</translation>
    </message>
    <message>
      <source>Scribus Version %1
%2 %3</source>
      <translation>Scribus versio %1
%2 %3</translation>
    </message>
    <message>
      <source>Galician:</source>
      <translation>Galicia:</translation>
    </message>
    <message>
      <source>Czech:</source>
      <translation>Tsekki:</translation>
    </message>
    <message>
      <source>Welsh:</source>
      <translation>Wales:</translation>
    </message>
    <message>
      <source>Contributions from:</source>
      <translation>Työhön osallistuneita:</translation>
    </message>
    <message>
      <source>Polish:</source>
      <translation>Puola:</translation>
    </message>
    <message>
      <source>Ukrainian:</source>
      <translation>Ukraina:</translation>
    </message>
    <message>
      <source>Slovak:</source>
      <translation>Slovakki:</translation>
    </message>
    <message>
      <source>Italian:</source>
      <translation>Italia:</translation>
    </message>
    <message>
      <source>Danish:</source>
      <translation>Tanska:</translation>
    </message>
    <message>
      <source>Lithuanian:</source>
      <translation>Liettua:</translation>
    </message>
    <message>
      <source>Windows port:</source>
      <translation>Windows-versio:</translation>
    </message>
    <message>
      <source>Turkish:</source>
      <translation>Turkki:</translation>
    </message>
    <message>
      <source>Russian:</source>
      <translation>Venäjä:</translation>
    </message>
    <message>
      <source>Hungarian:</source>
      <translation>Unkari:</translation>
    </message>
    <message>
      <source>French:</source>
      <translation>Ranska:</translation>
    </message>
    <message>
      <source>Bulgarian:</source>
      <translation>Bulgaria:</translation>
    </message>
    <message>
      <source>Norwegian:</source>
      <translation>Norja:</translation>
    </message>
    <message>
      <source>German:</source>
      <translation>Saksa:</translation>
    </message>
    <message>
      <source>Finnish:</source>
      <translation>Suomi:</translation>
    </message>
    <message>
      <source>Basque:</source>
      <translation>Baski:</translation>
    </message>
    <message>
      <source>Slovenian:</source>
      <translation>Slovenia:</translation>
    </message>
    <message>
      <source>&amp;About</source>
      <translation>T&amp;ietoja</translation>
    </message>
    <message>
      <source>A&amp;uthors</source>
      <translation>&amp;Tekijät</translation>
    </message>
    <message>
      <source>&amp;Translations</source>
      <translation>&amp;Käännökset</translation>
    </message>
    <message>
      <source>&amp;Online</source>
      <translation>&amp;Verkossa</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>&amp;Sulje</translation>
    </message>
    <message>
      <source>Swedish:</source>
      <translation>Ruotsi:</translation>
    </message>
    <message>
      <source>Development Team:</source>
      <translation>Ohjelman kehitys:</translation>
    </message>
    <message>
      <source>Official Documentation:</source>
      <translation>Virallinen dokumentaatio:</translation>
    </message>
    <message>
      <source>Other Documentation:</source>
      <translation>Muu dokumentaatio:</translation>
    </message>
    <message>
      <source>English (British):</source>
      <translation>Englanti (U.K.):</translation>
    </message>
    <message>
      <source>Homepage</source>
      <translation>Kotisivu</translation>
    </message>
    <message>
      <source>Online Reference</source>
      <translation>Materiaali verkossa</translation>
    </message>
    <message>
      <source>Bugs and Feature Requests</source>
      <translation>Bugit ja parannusehdotukset</translation>
    </message>
    <message>
      <source>Mailing List</source>
      <translation>Postituslista</translation>
    </message>
    <message>
      <source>Catalan:</source>
      <translation>Katalonia:</translation>
    </message>
    <message>
      <source>Esperanto:</source>
      <translation>Esperanto:</translation>
    </message>
    <message>
      <source>Korean:</source>
      <translation>Korea:</translation>
    </message>
    <message>
      <source>Spanish:</source>
      <translation>Espanja:</translation>
    </message>
    <message>
      <source>Official Translations and Translators:</source>
      <translation>Käännökset ja kääntäjät:</translation>
    </message>
    <message>
      <source>Serbian:</source>
      <translation>Serbia:</translation>
    </message>
    <message>
      <source>Previous Translation Contributors:</source>
      <translation>Aikaisempia kääntäjiä:</translation>
    </message>
    <message>
      <source>About Scribus %1</source>
      <translation>Tietoja Scribuksesta %1</translation>
    </message>
    <message>
      <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=littlecms C=CUPS T=TIFF support.
Missing library support is indicated by a *</source>
      <translation>Tässä näet version, käännöspäivämäärän sekä mukaan käännettyjen 
ohjelmakirjastojen tuen. C-C-T muodostuu seuraavasti:
C=littlecms - C=CUPS - T=TIFF. Jos jokin näistä puuttuu,
on sen kohdalla '*' merkkinä puuttumisesta</translation>
    </message>
    <message>
      <source>%1 %2 %3 </source>
      <translation>%1 %2 %3 </translation>
    </message>
    <message>
      <source>Afrikaans:</source>
      <translation>Afrikaans:</translation>
    </message>
    <message>
      <source>Portuguese (Brazilian):</source>
      <translation>Portugali (Brasilia):</translation>
    </message>
    <message>
      <source>Japanese:</source>
      <translation>Japani:</translation>
    </message>
  </context>
  <context>
    <name>AdvOptions</name>
    <message>
      <source>Advanced Options</source>
      <translation>Lisäasetukset</translation>
    </message>
    <message>
      <source>Creates PostScript Level 3</source>
      <translation>Luo PostScript taso 3</translation>
    </message>
    <message>
      <source>Creates PostScript Level 2 only, beware,
this can create huge files</source>
      <translation>Luo ainoastaan PostScript taso 2. 
Saattaa luoda erittäin suuria tiedostoja</translation>
    </message>
    <message>
      <source>Creates PostScript Level 1 only, beware,
this can create huge files</source>
      <translation>Luo ainoastaan PostScript taso 1. 
Saattaa luoda erittäin suuria tiedostoja</translation>
    </message>
    <message>
      <source>Mirror Page(s) &amp;Horizontal</source>
      <translation>Peilaa sivut &amp;vaakatasossa</translation>
    </message>
    <message>
      <source>Mirror Page(s) &amp;Vertical</source>
      <translation>Peilaa sivut &amp;pystytasossa</translation>
    </message>
    <message>
      <source>Apply &amp;ICC Profiles</source>
      <translation>Käytä &amp;ICC-profiileja</translation>
    </message>
    <message>
      <source>PostScript Level &amp;1</source>
      <translation>PostScript taso &amp;1</translation>
    </message>
    <message>
      <source>PostScript Level &amp;2</source>
      <translation>PostScript taso &amp;2</translation>
    </message>
    <message>
      <source>PostScript Level &amp;3</source>
      <translation>PostScript taso &amp;3</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>Apply Under Color &amp;Removal</source>
      <translation>Käytä &amp;alivärinpoistoa (UCR)</translation>
    </message>
    <message>
      <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
      <translation>Tapa vaihtaa C, Y ja M värien tekemä harmaa mustalla tehdyksi. 
UCR vaikuttaa kuvien kohdissa, jotka ovat neutraaleja tai lähellä harmaata 
olevia tummia värejä. UCR:n käyttäminen saattaa parantaa joidenkin kuvien
tulostamista. UCR parantaa kykyä välttää värien liikakylläisyyttä CMY-musteilla. 
Parhaan tuloksen saavuttamiseksi tarvitaan tapauskohtaista testausta.</translation>
    </message>
    <message>
      <source>Set Media Size</source>
      <translation>Aseta kohteen koko</translation>
    </message>
    <message>
      <source>This enables you to explicitely set,
the media size of the PostScript file.
Not recommended unless
 requested by your printer.</source>
      <translation>Mahdollistaa käytetyn median koon
määrittämisen PostScript-tiedostossa. 
Käyttöä suositellaan ainoastaan, jos 
paino on sitä vaatinut.</translation>
    </message>
  </context>
  <context>
    <name>Align</name>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source>Align</source>
      <translation>Tasaa</translation>
    </message>
    <message>
      <source>Horizontal</source>
      <translation>Vaakasuora</translation>
    </message>
    <message>
      <source>Top Sides</source>
      <translation>Yläreunat</translation>
    </message>
    <message>
      <source>Middles</source>
      <translation>Keskikohdat</translation>
    </message>
    <message>
      <source>Right Sides</source>
      <translation>Oikeat reunat</translation>
    </message>
    <message>
      <source>Left Sides</source>
      <translation>Vasemmat reunat</translation>
    </message>
    <message>
      <source>Bottom Sides</source>
      <translation>Alareunat</translation>
    </message>
    <message>
      <source>Vertical</source>
      <translation>Pystysuora</translation>
    </message>
    <message>
      <source>Distribute/Align</source>
      <translation>Jaa/Tasaa</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Apply</source>
      <translation>&amp;Käytä</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>&amp;Between:</source>
      <translation>K&amp;ohde:</translation>
    </message>
    <message>
      <source>A&amp;lign</source>
      <translation>&amp;Tasaa</translation>
    </message>
    <message>
      <source>Di&amp;splacement</source>
      <translation>&amp;Siirtymä</translation>
    </message>
    <message>
      <source>Distribute &amp;Evenly</source>
      <translation>&amp;Jaa tasaisesti</translation>
    </message>
    <message>
      <source>Bet&amp;ween:</source>
      <translation>Ko&amp;hde:</translation>
    </message>
    <message>
      <source>Do &amp;Not Change</source>
      <translation>&amp;Älä muuta</translation>
    </message>
    <message>
      <source>Al&amp;ign</source>
      <translation>T&amp;asaa</translation>
    </message>
    <message>
      <source>Dis&amp;placement</source>
      <translation>S&amp;iirtymä</translation>
    </message>
    <message>
      <source>Distribute E&amp;venly</source>
      <translation>Jaa tasais&amp;esti</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>&amp;Do Not Change</source>
      <translation>Ä&amp;lä muuta</translation>
    </message>
  </context>
  <context>
    <name>AlignSelect</name>
    <message>
      <source>Align Text Left</source>
      <translation>Tasaa teksti vasemmalle</translation>
    </message>
    <message>
      <source>Align Text Right</source>
      <translation>Tasaa teksti oikealle</translation>
    </message>
    <message>
      <source>Align Text Center</source>
      <translation>Keskitä teksti</translation>
    </message>
    <message>
      <source>Align Text Justified</source>
      <translation>Tasaa tekstin molemmat reunat</translation>
    </message>
    <message>
      <source>Align Text Forced Justified</source>
      <translation>Pakota tekstin molemmat reunat</translation>
    </message>
  </context>
  <context>
    <name>Annot</name>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source> pt</source>
      <translation>pt</translation>
    </message>
    <message>
      <source>sum</source>
      <translation>summa</translation>
    </message>
    <message>
      <source>Destination</source>
      <translation>Kohde</translation>
    </message>
    <message>
      <source>Date</source>
      <translation>Päivämäärä</translation>
    </message>
    <message>
      <source>None</source>
      <translation>Ei mitään</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>Avaa</translation>
    </message>
    <message>
      <source>Push</source>
      <translation>Paina</translation>
    </message>
    <message>
      <source>Star</source>
      <translation>Tähti</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>Teksti</translation>
    </message>
    <message>
      <source>Thin</source>
      <translation>Ohut</translation>
    </message>
    <message>
      <source>Time</source>
      <translation>Aika</translation>
    </message>
    <message>
      <source>Wide</source>
      <translation>Leveä</translation>
    </message>
    <message>
      <source>Prepend Currency Symbol</source>
      <translation>Sijoita valuutan symboli eteen</translation>
    </message>
    <message>
      <source>Submit Form</source>
      <translation>Lähetä lomake</translation>
    </message>
    <message>
      <source>Limit of</source>
      <translation>Yläraja</translation>
    </message>
    <message>
      <source>Check</source>
      <translation>Rasti</translation>
    </message>
    <message>
      <source>Cross</source>
      <translation>Risti</translation>
    </message>
    <message>
      <source>On Focus</source>
      <translation>Kohdistettaessa</translation>
    </message>
    <message>
      <source>Go To</source>
      <translation>Siirry</translation>
    </message>
    <message>
      <source>Icons</source>
      <translation>Kuvakkeet</translation>
    </message>
    <message>
      <source>Inset</source>
      <translation>Upotettu</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>Nimi:</translation>
    </message>
    <message>
      <source>Page:</source>
      <translation>Sivu:</translation>
    </message>
    <message>
      <source>Other</source>
      <translation>Muu</translation>
    </message>
    <message>
      <source>Plain</source>
      <translation>Paljas</translation>
    </message>
    <message>
      <source>Solid</source>
      <translation>Kiinteä</translation>
    </message>
    <message>
      <source>Type:</source>
      <translation>Tyyppi:</translation>
    </message>
    <message>
      <source>List Box</source>
      <translation>Listavalikko</translation>
    </message>
    <message>
      <source>Use Currency Symbol</source>
      <translation>Käytä valuutan symbolia</translation>
    </message>
    <message>
      <source>Number Format</source>
      <translation>Numeron muoto</translation>
    </message>
    <message>
      <source>Check Style:</source>
      <translation>Valintatyyli:</translation>
    </message>
    <message>
      <source>To File:</source>
      <translation>Tiedostoon:</translation>
    </message>
    <message>
      <source>No Print</source>
      <translation>Ei tulosteta</translation>
    </message>
    <message>
      <source>Submit to URL:</source>
      <translation>Lähetä URL:iin:</translation>
    </message>
    <message>
      <source>Calculate</source>
      <translation>Laske</translation>
    </message>
    <message>
      <source>Roll Over</source>
      <translation>Ylivienti</translation>
    </message>
    <message>
      <source>Value is not validated</source>
      <translation>Arvoa ei tarkasteta</translation>
    </message>
    <message>
      <source>maximum</source>
      <translation>maksimi</translation>
    </message>
    <message>
      <source>Formatting</source>
      <translation>Muotoilu</translation>
    </message>
    <message>
      <source>Combo Box</source>
      <translation>Alasvetovalikko</translation>
    </message>
    <message>
      <source>Custom validate script:</source>
      <translation>Oma tarkastusskripti:</translation>
    </message>
    <message>
      <source>minimum</source>
      <translation>minimi</translation>
    </message>
    <message>
      <source>Action</source>
      <translation>Toiminta</translation>
    </message>
    <message>
      <source>Border</source>
      <translation>Reuna</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
    <message>
      <source>Date Format</source>
      <translation>Päivämäärän muoto</translation>
    </message>
    <message>
      <source>Button</source>
      <translation>Painike</translation>
    </message>
    <message>
      <source>Circle</source>
      <translation>Ympyrä</translation>
    </message>
    <message>
      <source>Color:</source>
      <translation>Väri:</translation>
    </message>
    <message>
      <source>Field Properties</source>
      <translation>Kentän ominaisuudet</translation>
    </message>
    <message>
      <source>Dashed</source>
      <translation>Katkoviiva</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>Oma</translation>
    </message>
    <message>
      <source>Time Format</source>
      <translation>Ajan muoto</translation>
    </message>
    <message>
      <source>Event:</source>
      <translation>Tapahtuma:</translation>
    </message>
    <message>
      <source>Value is the</source>
      <translation>Arvo on</translation>
    </message>
    <message>
      <source>Format</source>
      <translation>Muotoilu</translation>
    </message>
    <message>
      <source>Hidden</source>
      <translation>Piilotettu</translation>
    </message>
    <message>
      <source>Custom calculation script:</source>
      <translation>Oma laskuskripti:</translation>
    </message>
    <message>
      <source>Enter a comma separated list of fields here</source>
      <translation>Anna kenttien nimet pilkuin eroteltuina</translation>
    </message>
    <message>
      <source>Custom Scripts</source>
      <translation>Omat skriptit</translation>
    </message>
    <message>
      <source>Invert</source>
      <translation>Käännä</translation>
    </message>
    <message>
      <source>No View</source>
      <translation>Ei näytetä</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>Normaali</translation>
    </message>
    <message>
      <source>Number</source>
      <translation>Numero</translation>
    </message>
    <message>
      <source>Remove</source>
      <translation>Poista</translation>
    </message>
    <message>
      <source>Square</source>
      <translation>Nelikulmio</translation>
    </message>
    <message>
      <source>Style:</source>
      <translation>Tyyli:</translation>
    </message>
    <message>
      <source>X-Pos:</source>
      <translation>X:</translation>
    </message>
    <message>
      <source>Field is formatted as:</source>
      <translation>Kenttä on muotoiltu:</translation>
    </message>
    <message>
      <source>Y-Pos:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <source>Width:</source>
      <translation>Leveys:</translation>
    </message>
    <message>
      <source>Tool-Tip:</source>
      <translation>Työkaluvihje:</translation>
    </message>
    <message>
      <source>On Blur</source>
      <translation>On Blur</translation>
    </message>
    <message>
      <source>Don't Export Value</source>
      <translation>Älä vie arvoa</translation>
    </message>
    <message>
      <source>Submit Data as HTML</source>
      <translation>Lähetä data HTML:na</translation>
    </message>
    <message>
      <source>Text Field</source>
      <translation>Tekstikenttä</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>Asetukset</translation>
    </message>
    <message>
      <source>Icon Placement...</source>
      <translation>Kuvakkeen sijoittelu...</translation>
    </message>
    <message>
      <source>Mouse Up</source>
      <translation>Hiiri ylös</translation>
    </message>
    <message>
      <source>Properties</source>
      <translation>Ominaisuudet</translation>
    </message>
    <message>
      <source>Pick...</source>
      <translation>Valitse...</translation>
    </message>
    <message>
      <source>Mouse Enter</source>
      <translation>Hiiri saapuu</translation>
    </message>
    <message>
      <source>Use Icons</source>
      <translation>Käytä kuvakkeita</translation>
    </message>
    <message>
      <source>Read Only</source>
      <translation>Vain luku</translation>
    </message>
    <message>
      <source>Pressed</source>
      <translation>Painettu</translation>
    </message>
    <message>
      <source>product</source>
      <translation>tulo</translation>
    </message>
    <message>
      <source>Text for Roll Over</source>
      <translation>Teksti yliviennille</translation>
    </message>
    <message>
      <source>Validate</source>
      <translation>Tarkastus</translation>
    </message>
    <message>
      <source>Change...</source>
      <translation>Muuta...</translation>
    </message>
    <message>
      <source>Percent Format</source>
      <translation>Prosenttimuoto</translation>
    </message>
    <message>
      <source>Characters</source>
      <translation>kirjainmerkkiä</translation>
    </message>
    <message>
      <source>Password</source>
      <translation>Salasana</translation>
    </message>
    <message>
      <source>Visibility:</source>
      <translation>Näkyvyys:</translation>
    </message>
    <message>
      <source>average</source>
      <translation>keskiarvo</translation>
    </message>
    <message>
      <source>Beveled</source>
      <translation>Viisto</translation>
    </message>
    <message>
      <source>Import Data</source>
      <translation>Tuo data</translation>
    </message>
    <message>
      <source>Mouse Exit</source>
      <translation>Hiiri poistuu</translation>
    </message>
    <message>
      <source>Mouse Down</source>
      <translation>Hiiri alas</translation>
    </message>
    <message>
      <source>Script:</source>
      <translation>Skripti:</translation>
    </message>
    <message>
      <source>Percentage</source>
      <translation>Prosentti</translation>
    </message>
    <message>
      <source>Decimals:</source>
      <translation>Desimaalit:</translation>
    </message>
    <message>
      <source>of the following fields:</source>
      <translation>seuraavista kentistä:</translation>
    </message>
    <message>
      <source>Import Data from:</source>
      <translation>Tuo data:</translation>
    </message>
    <message>
      <source>and less or equal to:</source>
      <translation>ja pienempi tai yhtä suuri kuin:</translation>
    </message>
    <message>
      <source>Keystroke:</source>
      <translation>Näppäimenlyönti:</translation>
    </message>
    <message>
      <source>Multi-Line</source>
      <translation>Monirivinen</translation>
    </message>
    <message>
      <source>Underline</source>
      <translation>Alleviivattu</translation>
    </message>
    <message>
      <source>Diamond</source>
      <translation>Timantti</translation>
    </message>
    <message>
      <source>Editable</source>
      <translation>Muokattava</translation>
    </message>
    <message>
      <source>Appearance</source>
      <translation>Ulkonäkö</translation>
    </message>
    <message>
      <source>Check Box</source>
      <translation>Valintaruutu</translation>
    </message>
    <message>
      <source>Value is not calculated</source>
      <translation>Arvoa ei lasketa</translation>
    </message>
    <message>
      <source>Edit...</source>
      <translation>Muokkaa...</translation>
    </message>
    <message>
      <source>Reset Form</source>
      <translation>Palauta lomake</translation>
    </message>
    <message>
      <source>Required</source>
      <translation>Pakollinen</translation>
    </message>
    <message>
      <source>Do Not Spell Check</source>
      <translation>Älä oikolue</translation>
    </message>
    <message>
      <source>Outlined</source>
      <translation>Rajattu äärivoin</translation>
    </message>
    <message>
      <source>Visible</source>
      <translation>Näkyvissä</translation>
    </message>
    <message>
      <source>Value must be greater than or equal to:</source>
      <translation>Arvon täytyy olla suurempi tai yhtä suuri kuin:</translation>
    </message>
    <message>
      <source>Format:</source>
      <translation>Muotoilu:</translation>
    </message>
    <message>
      <source>Highlight</source>
      <translation>Korosta</translation>
    </message>
    <message>
      <source>Default is Checked</source>
      <translation>Oletusarvona valittu</translation>
    </message>
    <message>
      <source>Example:</source>
      <translation>Esimerkki:</translation>
    </message>
    <message>
      <source>Do Not Scroll</source>
      <translation>Älä vieritä</translation>
    </message>
    <message>
      <source>Text for Button Down</source>
      <translation>Teksti painikkeen ollessa painettuna</translation>
    </message>
    <message>
      <source>You need at least the Icon for Normal to use Icons for Buttons</source>
      <translation>Tarvitset ainakin normaalin kuvakkeen käyttääksesi painikkeiden kuvakkeita</translation>
    </message>
    <message>
      <source>Selection Change</source>
      <translation>Valinta muuttui</translation>
    </message>
    <message>
      <source>Font for use with PDF 1.3:</source>
      <translation>PDF 1.3:n kanssa käytettävä kirjaintyyppi:</translation>
    </message>
    <message>
      <source>Flag is ignored for PDF 1.3</source>
      <translation>Merkintä jätetään huomioimatta PDF 1.3 -tiedostomuotoa käytettäessä</translation>
    </message>
    <message>
      <source>PDF Files (*.pdf);;All Files (*)</source>
      <translation>PDF-tiedostot (*.pdf);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>JavaScript</source>
      <translation>JavaScript</translation>
    </message>
    <message>
      <source>Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps);;All Files (*)</source>
      <translation>Kuvat (*.tif *.png *.jpg *.xpm);;PostScript (*.eps);;Kaikki tiedostot (*)</translation>
    </message>
  </context>
  <context>
    <name>Annota</name>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>Destination</source>
      <translation>Kohde</translation>
    </message>
    <message>
      <source>Link</source>
      <translation>Linkki</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>Avaa</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>Teksti</translation>
    </message>
    <message>
      <source>External Web-Link</source>
      <translation>Ulkoinen web-linkki</translation>
    </message>
    <message>
      <source>Annotation Properties</source>
      <translation>Kommenttien asetukset</translation>
    </message>
    <message>
      <source>PDF-Documents (*.pdf);;All Files (*)</source>
      <translation>PDF-tiedostot (*.pdf);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>External Link</source>
      <translation>Ulkoinen linkki</translation>
    </message>
    <message>
      <source>&amp;Type:</source>
      <translation>&amp;Tyyppi:</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>&amp;Muuta...</translation>
    </message>
    <message>
      <source>&amp;Page:</source>
      <translation>&amp;Sivu:</translation>
    </message>
    <message>
      <source>&amp;X-Pos</source>
      <translation>&amp;X:</translation>
    </message>
    <message>
      <source>&amp;Y-Pos:</source>
      <translation>&amp;Y:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>ApplyT</name>
    <message>
      <source>Normal</source>
      <translation>Normaali</translation>
    </message>
    <message>
      <source>Apply Template</source>
      <translation>Käytä sivumallia</translation>
    </message>
    <message>
      <source>&amp;Template:</source>
      <translation>&amp;Sivumalli:</translation>
    </message>
    <message>
      <source>Apply to &amp;Current Page</source>
      <translation>Käytä &amp;nykyiseen sivuun</translation>
    </message>
    <message>
      <source>Apply from &amp;Page:</source>
      <translation>Käytä &amp;alkaen sivulta:</translation>
    </message>
    <message>
      <source>To:</source>
      <translation>Sivulle:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>Apply to all &amp;even Pages</source>
      <translation>&amp;Käytä parillisiin sivuihin</translation>
    </message>
    <message>
      <source>Apply to all &amp;odd Pages</source>
      <translation>Käytä &amp;parittomiin sivuihin</translation>
    </message>
  </context>
  <context>
    <name>Biblio</name>
    <message>
      <source>Delete</source>
      <translation>Poista</translation>
    </message>
    <message>
      <source>Object</source>
      <translation>Kohde</translation>
    </message>
    <message>
      <source>Scrapbooks (*.scs);;All Files (*)</source>
      <translation>Leikekirjat (*.scs);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Scrapbook</source>
      <translation>Leikekirja</translation>
    </message>
    <message>
      <source>New Entry</source>
      <translation>Uusi leike</translation>
    </message>
    <message>
      <source>Rename</source>
      <translation>Nimeä uudelleen</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>Name &quot;%1&quot; isn't unique.
Please choose another.</source>
      <translation>Nimi &quot;%1&quot; on jo olemassa. 
Valitse toinen nimi.</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>&amp;Uusi</translation>
    </message>
    <message>
      <source>&amp;Load...</source>
      <translation>&amp;Lataa...</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>&amp;Tallenna</translation>
    </message>
    <message>
      <source>Save &amp;As...</source>
      <translation>Tallenna &amp;nimellä...</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>&amp;Sulje</translation>
    </message>
    <message>
      <source>&amp;Small</source>
      <translation>&amp;Pieni</translation>
    </message>
    <message>
      <source>&amp;Medium</source>
      <translation>&amp;Keskikokoinen</translation>
    </message>
    <message>
      <source>&amp;Large</source>
      <translation>&amp;Iso</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>Tie&amp;dosto</translation>
    </message>
    <message>
      <source>&amp;Preview</source>
      <translation>&amp;Esikatselu</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>&amp;Nimi:</translation>
    </message>
  </context>
  <context>
    <name>BookMView</name>
    <message>
      <source>Move Bookmark</source>
      <translation>Siirrä kirjanmerkki</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
    <message>
      <source>Bookmarks</source>
      <translation>Kirjanmerkit</translation>
    </message>
    <message>
      <source>Insert Bookmark</source>
      <translation>Lisää kirjanmerkki</translation>
    </message>
  </context>
  <context>
    <name>BookPalette</name>
    <message>
      <source>Bookmarks</source>
      <translation>Kirjanmerkit</translation>
    </message>
  </context>
  <context>
    <name>ButtonIcon</name>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Icon</source>
      <translation>Kuvake</translation>
    </message>
    <message>
      <source>Never</source>
      <translation>Ei koskaan</translation>
    </message>
    <message>
      <source>Reset</source>
      <translation>Palauta alkuperäiseen muotoon</translation>
    </message>
    <message>
      <source>Caption overlays Icon</source>
      <translation>Teksti kuvakkeen päällä</translation>
    </message>
    <message>
      <source>Scale How:</source>
      <translation>Miten skaalataan:</translation>
    </message>
    <message>
      <source>Layout:</source>
      <translation>Asettelu:</translation>
    </message>
    <message>
      <source>Caption only</source>
      <translation>Ainoastaan teksti</translation>
    </message>
    <message>
      <source>Caption below Icon</source>
      <translation>Teksti kuvakkeen alapuolella</translation>
    </message>
    <message>
      <source>Always</source>
      <translation>Aina</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
    <message>
      <source>Scale:</source>
      <translation>Skaalaa:</translation>
    </message>
    <message>
      <source>Icon only</source>
      <translation>Ainoastaan kuvake</translation>
    </message>
    <message>
      <source>When Icon is too small</source>
      <translation>Kun kuvake on liian pieni</translation>
    </message>
    <message>
      <source>Caption left to Icon</source>
      <translation>Teksti kuvakkeen vasemmalla puolella</translation>
    </message>
    <message>
      <source>Caption right to Icon</source>
      <translation>Teksti kuvakkeen oikealla puolella</translation>
    </message>
    <message>
      <source>When Icon is too big</source>
      <translation>Kun kuvake on liian suuri</translation>
    </message>
    <message>
      <source>Non Proportional</source>
      <translation>Ei tasasuhtainen</translation>
    </message>
    <message>
      <source>Proportional</source>
      <translation>Tasasuhtainen</translation>
    </message>
    <message>
      <source>Icon Placement</source>
      <translation>Kuvakkeen sijoittelu</translation>
    </message>
    <message>
      <source>Caption above Icon</source>
      <translation>Teksti kuvakkeen yläpuolella</translation>
    </message>
  </context>
  <context>
    <name>CMSPrefs</name>
    <message>
      <source>Absolute Colorimetric</source>
      <translation>Absolute Colorimetric</translation>
    </message>
    <message>
      <source>System Profiles</source>
      <translation>Järjestelmän profiilit</translation>
    </message>
    <message>
      <source>Rendering Intents</source>
      <translation>Sovitustavat</translation>
    </message>
    <message>
      <source>Color Management Settings</source>
      <translation>Värien hallinta</translation>
    </message>
    <message>
      <source>Perceptual</source>
      <translation>Perceptual</translation>
    </message>
    <message>
      <source>Relative Colorimetric</source>
      <translation>Relative Colorimetric</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation>Saturaation</translation>
    </message>
    <message>
      <source>Default color profile for imported images</source>
      <translation>Väriprofiili tuoduille kuville</translation>
    </message>
    <message>
      <source>Default color profile for solid colors on the page</source>
      <translation>Väriprofiili asiakirjan tasaisille väreille</translation>
    </message>
    <message>
      <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
      <translation>Itse tekemäsi tai näyttösi valmistajan toimittama väriprofiili. 
Profiilin tulee olla näytöllesi tarkoitettu ei yleinen väriprofiili kuten sRGB.</translation>
    </message>
    <message>
      <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
      <translation>Tulostimesi valmistajan toimittama väriprofiili tulostimellesi. 
Profiilin tulee olla tulostimellesi tarkoitettu ei yleinen väriprofiili kuten sRGB.</translation>
    </message>
    <message>
      <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
      <translation>Tumman pään tasaus on keino parantaa kuvien kontrastia. 
On suositeltavaa että valitsen tämän, jos asiakirjasi sisältää kuvia.</translation>
    </message>
    <message>
      <source>Default rendering intent for your monitor. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
      <translation>Sovitustapa näytöllesi. Ellet tiedä mikä tapa valita, tulisi käyttää 
sovitustapoja Relative Colorimetric tai Perceptual.</translation>
    </message>
    <message>
      <source>Default rendering intent for your printer. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
      <translation>Sovitustapa tulostimellesi. Ellet tiedä mikä tapa valita, tulisi käyttää 
sovitustapoja Relative Colorimetric tai Perceptual.</translation>
    </message>
    <message>
      <source>Enable 'soft proofing' of how your document colors will print,
based on the chosen printer profile.</source>
      <translation>Mahdollistaa tulosteen värien jäljittelyn näytöllä 
perustuen käytettävään väriprofiiliin.</translation>
    </message>
    <message>
      <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
      <translation>Toiminto näyttää värit, jotka saattavat tulostua väärin. 
Toiminnon käyttö vaatii tarkat profiilit ja se tulee huomioida ainoastaan varoituksena.</translation>
    </message>
    <message>
      <source>&amp;Activate Color Management</source>
      <translation>Käytä &amp;värien hallintaa</translation>
    </message>
    <message>
      <source>&amp;Pictures:</source>
      <translation>&amp;Kuvat:</translation>
    </message>
    <message>
      <source>&amp;Solid Colors:</source>
      <translation>&amp;Tasaiset värit:</translation>
    </message>
    <message>
      <source>&amp;Monitor:</source>
      <translation>&amp;Näyttö:</translation>
    </message>
    <message>
      <source>P&amp;rinter:</source>
      <translation>Tu&amp;lostin:</translation>
    </message>
    <message>
      <source>M&amp;onitor:</source>
      <translation>N&amp;äyttö:</translation>
    </message>
    <message>
      <source>Pr&amp;inter:</source>
      <translation>T&amp;ulostin:</translation>
    </message>
    <message>
      <source>Sim&amp;ulate Printer on the Screen</source>
      <translation>&amp;Jäljittele tulostinta näytöllä</translation>
    </message>
    <message>
      <source>Mark Colors out of &amp;Gamut</source>
      <translation>&amp;Merkkaa asteikon ulkopuoliset värit</translation>
    </message>
    <message>
      <source>Use &amp;Blackpoint Compensation</source>
      <translation>Käytä &amp;Tumman pään tasausta (BPC)</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>CMYKChoose</name>
    <message>
      <source>B:</source>
      <translation>B:</translation>
    </message>
    <message>
      <source>C:</source>
      <translation>C:</translation>
    </message>
    <message>
      <source>G:</source>
      <translation>G:</translation>
    </message>
    <message>
      <source>K:</source>
      <translation>K:</translation>
    </message>
    <message>
      <source>M:</source>
      <translation>M:</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>R:</source>
      <translation>R:</translation>
    </message>
    <message>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <source>New</source>
      <translation>Uusi</translation>
    </message>
    <message>
      <source>Old</source>
      <translation>Vanha</translation>
    </message>
    <message>
      <source>RGB</source>
      <translation>RGB</translation>
    </message>
    <message>
      <source>CMYK</source>
      <translation>CMYK</translation>
    </message>
    <message>
      <source>Web Safe RGB</source>
      <translation>Web-yhteensopiva RGB</translation>
    </message>
    <message>
      <source>Edit Color</source>
      <translation>Muokkaa värejä</translation>
    </message>
    <message>
      <source>Static Color Bars</source>
      <translation>Staattiset väripalkit</translation>
    </message>
    <message>
      <source>Dynamic Color Bars</source>
      <translation>Dynaamiset väripalkit</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>Name of the Color is not unique</source>
      <translation>Värin nimi on jo käytössä</translation>
    </message>
    <message>
      <source>HSV-Colormap</source>
      <translation>HSV-värikartta</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>&amp;Nimi:</translation>
    </message>
    <message>
      <source>Color &amp;Model</source>
      <translation>&amp;Värimalli</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>None</source>
      <translation>Ei mitään</translation>
    </message>
    <message>
      <source>You cannot create a color named &quot;%1&quot;.
It's a reserved name for transparent color</source>
      <translation>Väriä nimellä &quot;%1&quot; ei voi luoda. 
Nimi on varattu läpinäkyvälle värille</translation>
    </message>
  </context>
  <context>
    <name>ChooseStyles</name>
    <message>
      <source>Choose Styles</source>
      <translation>Valitse tyylit</translation>
    </message>
    <message>
      <source>Available Styles</source>
      <translation>Käytettävissä olevat tyylit</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
  </context>
  <context>
    <name>Cpalette</name>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>None</source>
      <translation>Ei väriä</translation>
    </message>
    <message>
      <source>Radial Gradient</source>
      <translation>Säteittäinen väriliuku</translation>
    </message>
    <message>
      <source>Horizontal Gradient</source>
      <translation>Vaakasuora väriliuku</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>Tasainen</translation>
    </message>
    <message>
      <source>Opacity:</source>
      <translation>Läpinäkyvyys:</translation>
    </message>
    <message>
      <source>Vertical Gradient</source>
      <translation>Pystyväriliuku</translation>
    </message>
    <message>
      <source>Cross Diagonal Gradient</source>
      <translation>Lävistäjän (oikealta vasemmalle) suuntainen väriliuku</translation>
    </message>
    <message>
      <source>Diagonal Gradient</source>
      <translation>Lävistäjän (vasemmalta oikealle) suuntainen väriliuku</translation>
    </message>
    <message>
      <source>Shade:</source>
      <translation>Sävy:</translation>
    </message>
    <message>
      <source>Edit Line Color Properties</source>
      <translation>Muokkaa viivan väriä</translation>
    </message>
    <message>
      <source>Edit Fill Color Properties</source>
      <translation>Muokkaa täyttöväriä</translation>
    </message>
    <message>
      <source>Saturation of color</source>
      <translation>Värin kylläisyys</translation>
    </message>
    <message>
      <source>Normal or gradient fill method</source>
      <translation>Normaali täyttö tai väriliuku</translation>
    </message>
    <message>
      <source>Set the transparency for the color selected</source>
      <translation>Aseta valitun värin läpinäkyvyys</translation>
    </message>
    <message>
      <source>Color of selected object</source>
      <translation>Valitun kohteen väri</translation>
    </message>
    <message>
      <source>Free linear Gradient</source>
      <translation>Vapaa lineaarinen väriliuku</translation>
    </message>
    <message>
      <source>X1:</source>
      <translation>X1:</translation>
    </message>
    <message>
      <source>Y1:</source>
      <translation>Y1:</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>X2:</source>
      <translation>X2:</translation>
    </message>
    <message>
      <source>Y2:</source>
      <translation>Y2:</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
    <message>
      <source>Free radial Gradient</source>
      <translation>Vapaa säteittäinen väriliuku</translation>
    </message>
  </context>
  <context>
    <name>CsvDialog</name>
    <message>
      <source>CSV Importer Options</source>
      <translation>CSV-tuojan ominaisuudet</translation>
    </message>
    <message>
      <source>Field delimiter:</source>
      <translation>Kentän erotin:</translation>
    </message>
    <message>
      <source>(TAB)</source>
      <translation>(SARKAIN)</translation>
    </message>
    <message>
      <source>Value delimiter:</source>
      <translation>Arvon erotin:</translation>
    </message>
    <message>
      <source>First row is a header</source>
      <translation>Ensimmäinen rivi on otsikko</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
    <message>
      <source>None</source>
      <translation>Ei mitään</translation>
    </message>
  </context>
  <context>
    <name>CupsOptions</name>
    <message>
      <source>No</source>
      <translation>Ei</translation>
    </message>
    <message>
      <source>Yes</source>
      <translation>Kyllä</translation>
    </message>
    <message>
      <source>Even Pages only</source>
      <translation>Vain parilliset sivut</translation>
    </message>
    <message>
      <source>Value</source>
      <translation>Arvo</translation>
    </message>
    <message>
      <source>Page per Sheet</source>
      <translation>Sivu arkille</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>Vaakasuora</translation>
    </message>
    <message>
      <source>Mirror</source>
      <translation>Peili</translation>
    </message>
    <message>
      <source>Option</source>
      <translation>Asetus</translation>
    </message>
    <message>
      <source>Orientation</source>
      <translation>Suunta</translation>
    </message>
    <message>
      <source>Printer Options</source>
      <translation>Tulostimen asetukset</translation>
    </message>
    <message>
      <source>Odd Pages only</source>
      <translation>Vain parittomat sivut</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>Pystysuora</translation>
    </message>
    <message>
      <source>Page Set</source>
      <translation>Sivukokonaisuus</translation>
    </message>
    <message>
      <source>Pages per Sheet</source>
      <translation>Sivua arkille</translation>
    </message>
    <message>
      <source>N-Up Printing</source>
      <translation>Tulosta useita sivuja arkille</translation>
    </message>
    <message>
      <source>All Pages</source>
      <translation>Kaikki sivut</translation>
    </message>
    <message>
      <source>This panel displays various CUPS options when printing. 
The exact parameters available will depend on your printer driver.
You can confirm CUPS support by selecting Help > About.
Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
      <translation>Tämä sivu näyttää useita CUPS-asetuksia. 
Tarkat asetukset riippuvat tulostimesi ajurista. 
Voit varmistaa CUPS-tuen menemällä valikon kohtaan Ohje->Tietoja Scribuksesta. 
Tarkastele C-C-T merkintää sivulla (C=CUPS, C=littlecms, T=TIFF).
Puuttuva kirjasto on merkitty * -merkillä</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>CustomFDialog</name>
    <message>
      <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
      <translation>Siirry asiakirjahakemistoosi. 
Voit määrittää sen asetuksissa.</translation>
    </message>
    <message>
      <source>Encoding:</source>
      <translation>Koodaus:</translation>
    </message>
    <message>
      <source>&amp;Compress File</source>
      <translation>&amp;Pakkaa tiedosto</translation>
    </message>
    <message>
      <source>&amp;Include Fonts</source>
      <translation>&amp;Sisällytä kirjaintyypit</translation>
    </message>
  </context>
  <context>
    <name>DelColor</name>
    <message>
      <source>?</source>
      <translation>?</translation>
    </message>
    <message>
      <source>Delete Color</source>
      <translation>Poista väri</translation>
    </message>
    <message>
      <source>Replace it with:</source>
      <translation>Korvaa:</translation>
    </message>
    <message>
      <source>Delete color:</source>
      <translation>Poista väri:</translation>
    </message>
    <message>
      <source>None</source>
      <translation>Ei mitään</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>DelPages</name>
    <message>
      <source>to:</source>
      <translation>minne:</translation>
    </message>
    <message>
      <source>Delete from:</source>
      <translation>Poista kohdasta:</translation>
    </message>
    <message>
      <source>Delete Pages</source>
      <translation>Poista sivut</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>DmF</name>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Use</source>
      <translation>Käytä</translation>
    </message>
    <message>
      <source>instead</source>
      <translation>sijasta</translation>
    </message>
    <message>
      <source>Missing Font</source>
      <translation>Puuttuva kirjaintyyppi</translation>
    </message>
    <message>
      <source>The Font %1 is not installed.</source>
      <translation>Kirjaintyyppiä %1 ei ole asennettu.</translation>
    </message>
  </context>
  <context>
    <name>DocIm</name>
    <message>
      <source>Importing failed</source>
      <translation>Tuonti epäonnistui</translation>
    </message>
    <message>
      <source>Importing Word document failed 
%1</source>
      <translation>Word-asiakirjan tuonti epäonnistui 
%1</translation>
    </message>
  </context>
  <context>
    <name>DocInfos</name>
    <message>
      <source>Document Information</source>
      <translation>Asiakirjan tiedot</translation>
    </message>
    <message>
      <source>&amp;Title:</source>
      <translation>O&amp;tsikko:</translation>
    </message>
    <message>
      <source>&amp;Author:</source>
      <translation>&amp;Tekijä:</translation>
    </message>
    <message>
      <source>&amp;Keywords:</source>
      <translation>A&amp;vainsanat:</translation>
    </message>
    <message>
      <source>Descri&amp;ption:</source>
      <translation>Kuvau&amp;s:</translation>
    </message>
    <message>
      <source>P&amp;ublisher:</source>
      <translation>&amp;Julkaisija:</translation>
    </message>
    <message>
      <source>&amp;Contributors:</source>
      <translation>Av&amp;ustajat:</translation>
    </message>
    <message>
      <source>Dat&amp;e:</source>
      <translation>&amp;Päivämäärä:</translation>
    </message>
    <message>
      <source>T&amp;ype:</source>
      <translation>&amp;Tyyppi:</translation>
    </message>
    <message>
      <source>F&amp;ormat:</source>
      <translation>&amp;Muoto:</translation>
    </message>
    <message>
      <source>Identi&amp;fier:</source>
      <translation>&amp;Tunniste:</translation>
    </message>
    <message>
      <source>&amp;Source:</source>
      <translation>L&amp;ähde:</translation>
    </message>
    <message>
      <source>&amp;Language:</source>
      <translation>&amp;Kieli:</translation>
    </message>
    <message>
      <source>&amp;Relation:</source>
      <translation>&amp;Suhde:</translation>
    </message>
    <message>
      <source>Co&amp;verage:</source>
      <translation>&amp;Kattavuus:</translation>
    </message>
    <message>
      <source>Ri&amp;ghts:</source>
      <translation>O&amp;ikeudet:</translation>
    </message>
    <message>
      <source>&amp;Document</source>
      <translation>&amp;Asiakirja</translation>
    </message>
    <message>
      <source>Further &amp;Information</source>
      <translation>&amp;Lisätiedot</translation>
    </message>
    <message>
      <source>The person or organisation primarily responsible for making the content of the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
      <translation>Henkilö tai järjestö, joka on pääosin vastuussa asiakirjan sisällön tekemisestä. 
Kenttä voidaan upottaa Scribus-asiakirjaan viitteeksi sekä PDF-tiedostoon metadatana</translation>
    </message>
    <message>
      <source>A name given to the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
      <translation>Asiakirjan nimi. 
Kenttä voidaan upottaa Scribus-asiakirjaan viitteeksi sekä PDF-tiedostoon metadatana</translation>
    </message>
    <message>
      <source>An account of the content of the document.
This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
      <translation>Tiivistelmä asiakirjan sisällöstä. 
Kenttä voidaan upottaa Scribus-asiakirjaan viitteeksi sekä PDF-tiedostoon metadatana</translation>
    </message>
    <message>
      <source>The topic of the content of the document.
This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
      <translation>Asiakirjan käsittelemät pääaiheet. 
Kenttään lisätyt avainsanat upotetaan PDF-tiedostoon helpottamaan hakuja ja lajittelua</translation>
    </message>
    <message>
      <source>A person or organisation responsible for making the document available</source>
      <translation>Henkilö tai järjestö, joka on vastuussa asiakirjan jakelusta</translation>
    </message>
    <message>
      <source>A person or organisation responsible for making contributions to the content of the document</source>
      <translation>Henkilö tai järjestö, joka on avustanut asiakirjan sisällön luonnissa</translation>
    </message>
    <message>
      <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
      <translation>Päivämäärä, joka on yhteydessä asiakirjan elinkaareen. VVVV-KK-PP ISO 9601</translation>
    </message>
    <message>
      <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
      <translation>Asiakirjan lajityyppi tai luonne. Esimerkiksi: kategoriat, käyttötarkoitukset</translation>
    </message>
    <message>
      <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting.
RFC2045,RFC2046 for MIME types are also useful here</source>
      <translation>Asiakirjan fyysinen tai digitaalinen ulkoasu. Julkaisumateriaalin laatu ja koko.
RFC2045 ja RFC2046 voidaan myös käyttää tässä MIME-tyyppejä varten</translation>
    </message>
    <message>
      <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
      <translation>Yksiselitteinen tunniste asiakirjaan kuten ISBN tai URI</translation>
    </message>
    <message>
      <source>The language in which the content of the document is written, usually a ISO-639 language code
optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
      <translation>Asiakirjan sisällön kieli. Yleensä käytetään ISO-639 kielikoodia,
jota voidaan jatkaa tavuviivalla ja ISO-3166 maakoodilla</translation>
    </message>
    <message>
      <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
      <translation>Viittaus yhteenkuuluvaan asiakirjaan mahdollisesti käyttäen yksiselitteistä tunnistetta kuten ISBN tai URI</translation>
    </message>
    <message>
      <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
      <translation>Asiakirjan sisällön laajuus sisältäen mahdollisesti paikan, ajan ja lainsäädölliset asiat</translation>
    </message>
    <message>
      <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
      <translation>Tietoa oikeuksista jotka liittyvät asiakirjaan, esimerkiksi tekijänoikeus, patentti tai tavaramerkki</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
      <translation>Viittaus asiakirjaan josta nykyinen asiakirja on johdettu, esim. SBN tai URI</translation>
    </message>
  </context>
  <context>
    <name>Druck</name>
    <message>
      <source>All</source>
      <translation>Kaikki</translation>
    </message>
    <message>
      <source>File</source>
      <translation>Tiedosto</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>Asetukset</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>Tallenna nimellä</translation>
    </message>
    <message>
      <source>Setup Printer</source>
      <translation>Aseta tulostin</translation>
    </message>
    <message>
      <source>Cyan</source>
      <translation>Syaani</translation>
    </message>
    <message>
      <source>Magenta</source>
      <translation>Magenta</translation>
    </message>
    <message>
      <source>Yellow</source>
      <translation>Keltainen</translation>
    </message>
    <message>
      <source>Black</source>
      <translation>Musta</translation>
    </message>
    <message>
      <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
      <translation>Syötä pilkuin eroteltu lista sivuista. Pelkän 
sivunumeron lisäksi voit käyttää merkkiä * 
kuvaamaan kaikkia sivuja tai 1-5 sivuväliä.</translation>
    </message>
    <message>
      <source>Print Destination</source>
      <translation>Tulosteen kohde</translation>
    </message>
    <message>
      <source>&amp;Options...</source>
      <translation>&amp;Asetukset...</translation>
    </message>
    <message>
      <source>&amp;File:</source>
      <translation>&amp;Tiedosto:</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>&amp;Muuta...</translation>
    </message>
    <message>
      <source>A&amp;lternative Printer Command</source>
      <translation>Oma tulo&amp;stuskomento</translation>
    </message>
    <message>
      <source>Co&amp;mmand:</source>
      <translation>&amp;Komento:</translation>
    </message>
    <message>
      <source>Range</source>
      <translation>Väli</translation>
    </message>
    <message>
      <source>Print &amp;All</source>
      <translation>Tulosta &amp;kaikki</translation>
    </message>
    <message>
      <source>Print Current Pa&amp;ge</source>
      <translation>Tulosta n&amp;ykyinen sivu</translation>
    </message>
    <message>
      <source>Print &amp;Range</source>
      <translation>Tulosta &amp;väli</translation>
    </message>
    <message>
      <source>N&amp;umber of Copies:</source>
      <translation>K&amp;opioiden määrä:</translation>
    </message>
    <message>
      <source>Print &amp;Normal</source>
      <translation>&amp;Normaali tulostus</translation>
    </message>
    <message>
      <source>Print &amp;Separations</source>
      <translation>Tulosta &amp;erottelut</translation>
    </message>
    <message>
      <source>Pr&amp;int In Color If Available</source>
      <translation>Tulosta vä&amp;rit, jos mahdollista</translation>
    </message>
    <message>
      <source>Print In Gra&amp;yscale</source>
      <translation>Tulosta &amp;harmaasävyissä</translation>
    </message>
    <message>
      <source>Ad&amp;vanced Options...</source>
      <translation>&amp;Lisäasetukset...</translation>
    </message>
    <message>
      <source>&amp;Print</source>
      <translation>T&amp;ulosta</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>Use an alternative print manager, such as kprinter or gtklp,
to utilize additional printing options</source>
      <translation>Käytä vaihtoehtoista tulostuksenhallintaa kuten kprinter tai gtklp</translation>
    </message>
    <message>
      <source>PostScript Files (*.ps);;All Files (*)</source>
      <translation>PostScript-tiedostot (*.ps);;Kaikki tiedostot (*)</translation>
    </message>
  </context>
  <context>
    <name>EPSPlug</name>
    <message>
      <source>Importing File:
%1
failed!</source>
      <translation>Tiedoston %1 tuonti epäonnistui!</translation>
    </message>
    <message>
      <source>Fatal Error</source>
      <translation>Vakava virhe</translation>
    </message>
  </context>
  <context>
    <name>EditMacroDialog</name>
    <message>
      <source>Editing Macro: &lt;b></source>
      <translation>Muokattava makro: &lt;b></translation>
    </message>
    <message>
      <source>Scribus - Macro Manager</source>
      <translation>Scribus - Makrojen hallinta</translation>
    </message>
    <message>
      <source>The file '%1' already exists.
Are you sure you want to overwrite it?
</source>
      <translation>Tiedosto '%1' on jo olemassa. Haluatko ylikirjoittaa sen?</translation>
    </message>
    <message>
      <source>You have already edited this macro.
Are you sure you want to discard all your changes?
</source>
      <translation>Olet muokannut tätä makroa. 
Haluatko kumota tekemäsi muutokset?</translation>
    </message>
    <message>
      <source>A full traceback follows:

%1
</source>
      <translation>Pinolistaus: 

%1</translation>
    </message>
    <message>
      <source>Compilation of the macro failed, so it can not 
be saved in its current form. The error was:
%1
</source>
      <translation>Makron kääntäminen epäonnistui. Tästä johtuen 
sitä ei voida tallentaa nykyisessä muodossaan. 
Virhe oli:
%1
</translation>
    </message>
    <message>
      <source>Scribus - New Macro</source>
      <translation>Scribus - Uusi makro</translation>
    </message>
    <message>
      <source>&lt;qt>This is the Edit Macro / New Macro dialog box. Here you can change the source code to macros. Edit the source code to the macro in the text editing area below the &quot;Source Code&quot; label and click OK to save your changes to the macro.&lt;/qt></source>
      <translation>&lt;qt>Tämä on Muokkaa makroa/Uusi makro ikkuna. Täällä voit muokata makrosi lähdekoodia ja tallentaa muutokset OK-painikkeella&lt;/qt></translation>
    </message>
    <message>
      <source>Source Code:</source>
      <translation>Lähdekoodi:</translation>
    </message>
    <message>
      <source>Editing Macro:</source>
      <translation>Makron muokkaus:</translation>
    </message>
    <message>
      <source>The name of the macro being edited.</source>
      <translation>Muokattavana olevan makron nimi.</translation>
    </message>
    <message>
      <source>&lt;/qt>This item displays the name of the macro you are currently editing.&lt;qt></source>
      <translation>&lt;/qt>Tämä näyttää muokattavana olevan makron nimen.&lt;qt></translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>&lt;qt>Discard all changes and exit.&lt;/qt></source>
      <translation>&lt;qt>Kumoa kaikki muutoksest ja poistu&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;qt>Exit the editing dialog, discarding all changes you have made. If you want to exit without saving the macro but don't want to lose your changes, save your changes with &quot;Save Source As...&quot;.&lt;/qt></source>
      <translation>&lt;qt>Poistu muokkausikkunasta ja kumoa kaikki muutokset. Jos haluat poistua tallentamatta makroa, mutta et halua menettää muutoksia, tallenna muutokset käyttäen &quot;Tallenna koodi nimellä...&quot;&lt;/qt></translation>
    </message>
    <message>
      <source>&amp;Ok</source>
      <translation>&amp;Ok</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>&lt;qt>Save changes and exit.&lt;/qt></source>
      <translation>&lt;qt>Tallenna muutokset ja poistu&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;qt>Save changes to the macro and exit. If there is a problem with the macro, a message will be displayed and the editing dialog will not close.&lt;/qt></source>
      <translation>&lt;qt>Tallenna muutokset makroon ja poistu. Jos makron kanssa on ongelmia, saat tästä tiedon eikä muokkausikkunaa suljeta&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;qt>This text area contains the source code of the macro. If you're creating a new macro there won't be anything in it, and if you're editing an existing macro the source code the macro was defined with will be shown here.&lt;/qt></source>
      <translation>&lt;qt>Tämä tekstikenttä sisältää makron lähdekoodin. Jos luot uuden makron tekstikenttä on tyhjä. Jos olet muokkaamassa olemassa olevaa makroa koodi, jossa makro määriteltiin näytetään tekstikentässä.&lt;/qt></translation>
    </message>
    <message>
      <source>&amp;Load Source ...</source>
      <translation>&amp;Lataa koodi...</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
    <message>
      <source>&lt;qt>Replace the current source code with code from a file.&lt;/qt></source>
      <translation>&lt;qt>Korvaa tämänhetkinen koodi koodilla tiedostosta.&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;qt>Load new source code into the editing area from &quot;file&quot;. Any source code in the editing area is replaced. The loaded source must be a Scribus macro function. If you load any other script, you'll need to edit it so that it'll work as a scripter macro before saving it.&lt;/qt></source>
      <translation>&lt;qt>Lataa koodi muokkausta varten tiedostosta. Muokkausalueella oleva koodi korvataan. Ladattavan koodin täytyy olla Scribus makrofunktio. Jos lataat jonkin muun skriptin, täytyy sitä muokata ennen tallennusta siten, että se toimii makrona.&lt;/qt></translation>
    </message>
    <message>
      <source>&amp;Save Source As...</source>
      <translation>Tallenna koodi &amp;nimellä...</translation>
    </message>
    <message>
      <source>Alt+S</source>
      <translation>Alt+S</translation>
    </message>
    <message>
      <source>&lt;qt>Save the source code being edited to a file.&lt;/qt></source>
      <translation>&lt;qt>Tallenna muokattava koodi tiedostoon.&lt;qt></translation>
    </message>
    <message>
      <source>Save the source code - the text - of the macro to a file. You can edit the saved source and load it again with &quot;Load Source...&quot;.</source>
      <translation>Tallenna makron lähdekoodi tiedostoon. Voit muokata tallennettua koodia lataamalla sen uudestaan käyttäen valikon kohtaa &quot;Lataa koodi...&quot;.</translation>
    </message>
    <message>
      <source>Save File Dialog</source>
      <translation>Tallenna tiedosto</translation>
    </message>
    <message>
      <source>Save macro source</source>
      <translation>Tallenna makron koodi</translation>
    </message>
    <message>
      <source>Open File Dialog</source>
      <translation>Avaa tiedosto</translation>
    </message>
    <message>
      <source>Select the source file to load</source>
      <translation>Valitse ladattava tiedosto</translation>
    </message>
    <message>
      <source>Python source files (*.py)</source>
      <translation>Python-tiedostot (*.py)</translation>
    </message>
  </context>
  <context>
    <name>EditStyle</name>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>Name of the Style is not unique</source>
      <translation>Tyylin nimi on jo käytössä</translation>
    </message>
    <message>
      <source>Edit Style</source>
      <translation>Muokkaa tyyliä</translation>
    </message>
    <message>
      <source>Character</source>
      <translation>Teksti</translation>
    </message>
    <message>
      <source>Vertical Spaces</source>
      <translation>Välistys</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>Line Spacing</source>
      <translation>Riviväli</translation>
    </message>
    <message>
      <source>None</source>
      <translation>Ei mitään</translation>
    </message>
    <message>
      <source>Effect:</source>
      <translation>Tehosteet:</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
    <message>
      <source>Name of your paragraph style</source>
      <translation>Kappaletyylisi nimi</translation>
    </message>
    <message>
      <source>Font of selected text or object</source>
      <translation>Valitun tekstin tai kohteen kirjaintyyppi</translation>
    </message>
    <message>
      <source>Font Size</source>
      <translation>Kirjaintyypin koko</translation>
    </message>
    <message>
      <source>Color of text fill</source>
      <translation>Tekstin täytön väri</translation>
    </message>
    <message>
      <source>Color of text stroke</source>
      <translation>Tekstin reunan väri</translation>
    </message>
    <message>
      <source>Provides an oversized first letter for a paragraph. Used for stylistic effect</source>
      <translation>Tekee ylisuuren ensimmäisen kirjaimen kappaleelle. Käytetään tyylikeinona</translation>
    </message>
    <message>
      <source>Determines the overall height, in line numbers, of the Drop Caps</source>
      <translation>Anfangin korkeus riveinä</translation>
    </message>
    <message>
      <source>Align text to baseline grid</source>
      <translation>Tasaa teksti peruslinjaan</translation>
    </message>
    <message>
      <source>Spacing above the paragraph</source>
      <translation>Tila kappaleen yläpuolella</translation>
    </message>
    <message>
      <source>Spacing below the paragraph</source>
      <translation>Tila kappaleen alapuolella</translation>
    </message>
    <message>
      <source>Tabulators and Indentation</source>
      <translation>Sarkaimet ja sisennykset</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>&amp;Nimi:</translation>
    </message>
    <message>
      <source>&amp;Font:</source>
      <translation>Kir&amp;jaintyyppi:</translation>
    </message>
    <message>
      <source>Si&amp;ze:</source>
      <translation>&amp;Koko:</translation>
    </message>
    <message>
      <source>&amp;Alignment:</source>
      <translation>Ta&amp;saus:</translation>
    </message>
    <message>
      <source>&amp;Drop Caps</source>
      <translation>An&amp;fangi</translation>
    </message>
    <message>
      <source>&amp;Lines:</source>
      <translation>R&amp;ivejä:</translation>
    </message>
    <message>
      <source>F&amp;ill Color:</source>
      <translation>&amp;Täyttöväri:</translation>
    </message>
    <message>
      <source>St&amp;roke Color:</source>
      <translation>&amp;Viivan väri:</translation>
    </message>
    <message>
      <source>Adjust to Baseline &amp;Grid</source>
      <translation>Kiinnitä &amp;peruslinjaan</translation>
    </message>
    <message>
      <source>Line &amp;Spacing:</source>
      <translation>&amp;Riviväli:</translation>
    </message>
    <message>
      <source>Abo&amp;ve:</source>
      <translation>&amp;Yläpuolella:</translation>
    </message>
    <message>
      <source>&amp;Below:</source>
      <translation>&amp;Alapuolella:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>Editor</name>
    <message>
      <source>Editor</source>
      <translation>Editori</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>Uu&amp;si</translation>
    </message>
    <message>
      <source>&amp;Open...</source>
      <translation>&amp;Avaa...</translation>
    </message>
    <message>
      <source>Save &amp;As...</source>
      <translation>Tallenna &amp;nimellä...</translation>
    </message>
    <message>
      <source>&amp;Save and Exit</source>
      <translation>Tallenna ja &amp;poistu</translation>
    </message>
    <message>
      <source>&amp;Exit without Saving</source>
      <translation>P&amp;oistu tallentamatta</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>&amp;Kumoa</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>Tee &amp;uudelleen</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>&amp;Leikkaa</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>&amp;Kopioi</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>L&amp;iitä</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>T&amp;yhjennä</translation>
    </message>
    <message>
      <source>&amp;Get Field Names</source>
      <translation>&amp;Hae kenttien nimet</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>&amp;Tiedosto</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>&amp;Muokkaa</translation>
    </message>
    <message>
      <source>JavaScripts (*.js);;All Files (*)</source>
      <translation>JavaScript-tiedostot (*.js);;Kaikki tiedostot (*)</translation>
    </message>
  </context>
  <context>
    <name>ExportForm</name>
    <message>
      <source>&amp;All pages</source>
      <translation>&amp;Kaikki sivut</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>Change the output directory</source>
      <translation>Muuta kohdehakemistoa</translation>
    </message>
    <message>
      <source>Available export formats</source>
      <translation>Käytettävät tiedostotyypit</translation>
    </message>
    <message>
      <source>Choose a Export Directory</source>
      <translation>Valitse Kohdehakemisto</translation>
    </message>
    <message>
      <source>The output directory - the place to store your images.
Name of the export file will be 'documentname-pagenumber.filetype'</source>
      <translation>Kohdehakemisto, jonne kuvat tallennetaan. Vietyjen tiedostojen 
nimet ovat muotoa asiakirjan_nimi-sivunumero.tiedostotyyppi</translation>
    </message>
    <message>
      <source>Export only the current page</source>
      <translation>Vie ainoastaan nykyinen sivu</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>&amp;Muuta...</translation>
    </message>
    <message>
      <source>&amp;Export to Directory:</source>
      <translation>&amp;Vie hakemistoon:</translation>
    </message>
    <message>
      <source>Image &amp;Type:</source>
      <translation>Kuvan &amp;Tyyppi:</translation>
    </message>
    <message>
      <source>&amp;Quality:</source>
      <translation>&amp;Laatu:</translation>
    </message>
    <message>
      <source>Export as Image(s)</source>
      <translation>Vie kuvana</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>Asetukset</translation>
    </message>
    <message>
      <source>&amp;Resolution:</source>
      <translation>Ta&amp;rkkuus:</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source> dpi</source>
      <translation> dpi</translation>
    </message>
    <message>
      <source>Range</source>
      <translation>Väli</translation>
    </message>
    <message>
      <source>&amp;Current page</source>
      <translation>&amp;Nykyinen sivu</translation>
    </message>
    <message>
      <source>&amp;Range</source>
      <translation>&amp;Alue</translation>
    </message>
    <message>
      <source>C</source>
      <translation>C</translation>
    </message>
    <message>
      <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
      <translation>Syötä pilkuin eroteltu lista, jossa * merkitsee 
kaikkia sivuja ja 1-5 sivuväliä. Voit myös syöttää 
yksittäisen sivunumeron.</translation>
    </message>
    <message>
      <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
      <translation>Kuvien resoluutio. 72 dpi on hyvä valinta kuville,
joita on tarkoitus katsella näytöltä</translation>
    </message>
    <message>
      <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
      <translation>Kuviesi laatu. 100 % on paras ja 1 % heikoin</translation>
    </message>
    <message>
      <source>Export a range of pages</source>
      <translation>Vie valikoima sivuja</translation>
    </message>
    <message>
      <source>Export all pages</source>
      <translation>Vie kaikki sivut</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>&amp;Koko:</translation>
    </message>
    <message>
      <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
      <translation>Kuvien koko, 100 % ei muutosta, 200 % kaksi kertaa suurempi jne.</translation>
    </message>
  </context>
  <context>
    <name>FDialogPreview</name>
    <message>
      <source>Size:</source>
      <translation>Koko:</translation>
    </message>
    <message>
      <source>No Title</source>
      <translation>Ei otsikkoa</translation>
    </message>
    <message>
      <source>Title:</source>
      <translation>Otsikko:</translation>
    </message>
    <message>
      <source>Author:</source>
      <translation>Tekijä:</translation>
    </message>
    <message>
      <source>Unknown</source>
      <translation>Tuntematon</translation>
    </message>
    <message>
      <source>Scribus Document</source>
      <translation>Scribus asiakirja</translation>
    </message>
  </context>
  <context>
    <name>Farbmanager</name>
    <message>
      <source>Open</source>
      <translation>Avaa</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
      <translation>Asiakirjat (*.sla *.sla.gz *.scd *.scd.gz);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Colors</source>
      <translation>Värit</translation>
    </message>
    <message>
      <source>Documents (*.sla *.scd);;All Files (*)</source>
      <translation>Asiakirjat (*.sla *.scd);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Copy of %1</source>
      <translation>Kopio-%1</translation>
    </message>
    <message>
      <source>Color Sets</source>
      <translation>Värisarjat</translation>
    </message>
    <message>
      <source>Current Color Set:</source>
      <translation>Nykyinen värisarja:</translation>
    </message>
    <message>
      <source>Choose a Name</source>
      <translation>Valitse nimi</translation>
    </message>
    <message>
      <source>New Color</source>
      <translation>Uusi väri</translation>
    </message>
    <message>
      <source>Choose a color set to load</source>
      <translation>Valitse ladattava värisarja</translation>
    </message>
    <message>
      <source>Save the current color set</source>
      <translation>Tallenna nykyinen värisarja</translation>
    </message>
    <message>
      <source>Append colors to the current set from an existing document</source>
      <translation>Lisää värit toisesta asiakirjasta nykyiseen värisarjaan</translation>
    </message>
    <message>
      <source>Create a new color within the current set</source>
      <translation>Luo uusi väri nykyiseen värisarjaan</translation>
    </message>
    <message>
      <source>Edit the currently selected color</source>
      <translation>Muokkaa valittua väriä</translation>
    </message>
    <message>
      <source>Make a copy of the currently selected color</source>
      <translation>Kopioi valittu väri</translation>
    </message>
    <message>
      <source>Delete the currently selected color</source>
      <translation>Poista valittu väri</translation>
    </message>
    <message>
      <source>Make the current colorset the default color set</source>
      <translation>Tee valitusta värisarjasta oletussarja</translation>
    </message>
    <message>
      <source>Remove unused colors from current document's color set</source>
      <translation>Poista käyttämättömät värit asiakirjan värisarjasta</translation>
    </message>
    <message>
      <source>&amp;Append</source>
      <translation>&amp;Tuo</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>&amp;Uusi</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>&amp;Muokkaa</translation>
    </message>
    <message>
      <source>D&amp;uplicate</source>
      <translation>&amp;Kopioi</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>P&amp;oista</translation>
    </message>
    <message>
      <source>&amp;Remove Unused</source>
      <translation>Poista &amp;käyttämättömät</translation>
    </message>
    <message>
      <source>&amp;Save Color Set</source>
      <translation>Tallenna &amp;värisarja</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>&amp;Nimi:</translation>
    </message>
    <message>
      <source>None</source>
      <translation>Ei mitään</translation>
    </message>
  </context>
  <context>
    <name>FontPrefs</name>
    <message>
      <source>Yes</source>
      <translation>Kyllä</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>Tyyppi</translation>
    </message>
    <message>
      <source>Font Name</source>
      <translation>Kirjaintyypin nimi</translation>
    </message>
    <message>
      <source>Font Substitutions</source>
      <translation>Korvaavat kirjaintyypit</translation>
    </message>
    <message>
      <source>Subset</source>
      <translation>Osajoukko</translation>
    </message>
    <message>
      <source>Replacement</source>
      <translation>Korvaava</translation>
    </message>
    <message>
      <source>Embed in:</source>
      <translation>Upota:</translation>
    </message>
    <message>
      <source>Use Font</source>
      <translation>Käytä kirjaintyyppiä</translation>
    </message>
    <message>
      <source>Choose a Directory</source>
      <translation>Valitse hakemisto</translation>
    </message>
    <message>
      <source>Global Font Settings</source>
      <translation>Yleiset kirjainasetukset</translation>
    </message>
    <message>
      <source>Path to Font File</source>
      <translation>Polku kirjaintyyppitiedostoon</translation>
    </message>
    <message>
      <source>Additional Paths</source>
      <translation>Lisätyt polut</translation>
    </message>
    <message>
      <source>Available Fonts</source>
      <translation>Mahdolliset kirjaintyypit</translation>
    </message>
    <message>
      <source>&amp;Available Fonts</source>
      <translation>L&amp;öydetyt kirjaintyypit</translation>
    </message>
    <message>
      <source>Font &amp;Substitutions</source>
      <translation>&amp;Korvaavat kirjaintyypit</translation>
    </message>
    <message>
      <source>Additional &amp;Paths</source>
      <translation>Lisätyt p&amp;olut</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>P&amp;oista</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>&amp;Muuta...</translation>
    </message>
    <message>
      <source>A&amp;dd...</source>
      <translation>&amp;Lisää...</translation>
    </message>
    <message>
      <source>&amp;Remove</source>
      <translation>Po&amp;ista</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>PostScript</source>
      <translation>PostScript</translation>
    </message>
  </context>
  <context>
    <name>FontPreview</name>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>Woven silk pyjamas exchanged for blue quartz</source>
      <translation>Wowen silk pyjamas exchanged for blue quarz</translation>
    </message>
    <message>
      <source>Fonts Preview</source>
      <translation>Kirjaintyyppien esikatselu</translation>
    </message>
    <message>
      <source>Append selected font into Style, Font menu</source>
      <translation>Lisää valittu kirjaintyyppi Tyyli-Kirjaintyyppi-valikkoon</translation>
    </message>
    <message>
      <source>Leave preview</source>
      <translation>Poistu esikatselusta</translation>
    </message>
    <message>
      <source>Size of the Font</source>
      <translation>Kirjaintyypin koko</translation>
    </message>
  </context>
  <context>
    <name>GradientEditor</name>
    <message>
      <source>Position:</source>
      <translation>Sijainti:</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Here you can add, change or remove Color-Stops.</source>
      <translation>Lisää, muuta tai poista värien paikkoja.</translation>
    </message>
  </context>
  <context>
    <name>GuideManager</name>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>Horizontal Guides</source>
      <translation>Vaakasuorat apuviivat</translation>
    </message>
    <message>
      <source>Manage Guides</source>
      <translation>Apuviivojen hallinta</translation>
    </message>
    <message>
      <source>Vertical Guides</source>
      <translation>Pystysuorat apuviivat</translation>
    </message>
    <message>
      <source>&amp;Y-Pos:</source>
      <translation>&amp;Y:</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation>&amp;Lisää</translation>
    </message>
    <message>
      <source>D&amp;elete</source>
      <translation>P&amp;oista</translation>
    </message>
    <message>
      <source>&amp;X-Pos:</source>
      <translation>&amp;X:</translation>
    </message>
    <message>
      <source>A&amp;dd</source>
      <translation>L&amp;isää</translation>
    </message>
    <message>
      <source>De&amp;lete</source>
      <translation>Poi&amp;sta</translation>
    </message>
    <message>
      <source>&amp;Lock Guides</source>
      <translation>L&amp;ukitse apuviivat</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>HelpBrowser</name>
    <message>
      <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
      <translation>Ohjetta ei ole vielä saatavissa tässä muodossa. Osoitteesta http://docs.scribus.net 
löydät viimeisimmän version dokumentaatiosta. Lisää materiaalia löydät myös 
osoitteesta www.scribus.net.</translation>
    </message>
    <message>
      <source>Contents</source>
      <translation>Sisällys</translation>
    </message>
    <message>
      <source>Link</source>
      <translation>Linkki</translation>
    </message>
    <message>
      <source>Scribus Online Help</source>
      <translation>Scribus ohje verkossa</translation>
    </message>
    <message>
      <source>&amp;Contents</source>
      <translation>&amp;Sisällys</translation>
    </message>
    <message>
      <source>&amp;Search</source>
      <translation>&amp;Etsi</translation>
    </message>
    <message>
      <source>S&amp;earch</source>
      <translation>E&amp;tsi</translation>
    </message>
    <message>
      <source>Ctrl+F</source>
      <translation>Ctrl+F</translation>
    </message>
    <message>
      <source>F3</source>
      <translation>F3</translation>
    </message>
    <message>
      <source>unknown</source>
      <translation>tuntematon</translation>
    </message>
    <message>
      <source>Find</source>
      <translation>Etsi</translation>
    </message>
    <message>
      <source>Search Term:</source>
      <translation>Hakusana:</translation>
    </message>
  </context>
  <context>
    <name>HyAsk</name>
    <message>
      <source>Skip</source>
      <translation>Ohita</translation>
    </message>
    <message>
      <source>Accept</source>
      <translation>Hyväksy</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
    <message>
      <source>Possible Hyphenation</source>
      <translation>Mahdollinen tavutus</translation>
    </message>
  </context>
  <context>
    <name>HySettings</name>
    <message>
      <source>Hyphenator Settings</source>
      <translation>Tavutuksen asetukset</translation>
    </message>
    <message>
      <source>Length of the smallest word to be hyphenated.</source>
      <translation>Lyhimmän tavutettavan sanan pituus.</translation>
    </message>
    <message>
      <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
      <translation>Suurin määrä tavutuksia peräkkäin.
0 tarkoittaa rajoittamatonta määrää tavutuksia.</translation>
    </message>
    <message>
      <source>&amp;Language:</source>
      <translation>&amp;Kieli:</translation>
    </message>
    <message>
      <source>&amp;Smallest Word:</source>
      <translation>&amp;Lyhin sana:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>Hyphenate Text Automatically &amp;During Typing</source>
      <translation>Tavuta teksti automaattisesti &amp;kirjoitettaessa</translation>
    </message>
    <message>
      <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
      <translation>Dialogi-ikkuna, joka näyttää kaikki mahdolliset tavutettavat sanat tavutusvaihtoehtoineen, 
ilmestyy, kun käytät Työkalut, Tavuta teksti.</translation>
    </message>
    <message>
      <source>Enables automatic hyphenation of your text while typing.</source>
      <translation>Mahdollistaa automaattiset tavutuksen kirjoittaessasi.</translation>
    </message>
    <message>
      <source>&amp;Hyphenation Suggestions</source>
      <translation>&amp;Tavutusehdotukset</translation>
    </message>
    <message>
      <source>Consecutive Hyphenations &amp;Allowed:</source>
      <translation>&amp;Sallitut perättäiset tavutukset:</translation>
    </message>
  </context>
  <context>
    <name>InsPage</name>
    <message>
      <source>Normal</source>
      <translation>Normal</translation>
    </message>
    <message>
      <source>at End</source>
      <translation>Loppuun</translation>
    </message>
    <message>
      <source>before Page</source>
      <translation>Ennen sivua</translation>
    </message>
    <message>
      <source>Insert Page</source>
      <translation>Lisää sivu</translation>
    </message>
    <message>
      <source>Inserting</source>
      <translation>Lisää</translation>
    </message>
    <message>
      <source>after Page</source>
      <translation>Jälkeen sivun</translation>
    </message>
    <message>
      <source>Template (Right Page):</source>
      <translation>Sivumalli (oikea sivu):</translation>
    </message>
    <message>
      <source>&amp;Inserting</source>
      <translation>&amp;Lisää</translation>
    </message>
    <message>
      <source>Page(s)</source>
      <translation>sivu(a)</translation>
    </message>
    <message>
      <source>&amp;Template (Left Page):</source>
      <translation>Sivumalli (&amp;vasen sivu):</translation>
    </message>
    <message>
      <source>&amp;Template:</source>
      <translation>&amp;Sivumalli:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>InsertTable</name>
    <message>
      <source>Insert Table</source>
      <translation>Lisää taulukko</translation>
    </message>
    <message>
      <source>Number of Rows:</source>
      <translation>Rivien lukumäärä:</translation>
    </message>
    <message>
      <source>Number of Columns:</source>
      <translation>Sarakkeiden lukumäärä:</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
  </context>
  <context>
    <name>JavaDocs</name>
    <message>
      <source>New Script</source>
      <translation>Uusi skripti</translation>
    </message>
    <message>
      <source>Edit JavaScripts</source>
      <translation>Muokkaa javaskriptejä</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>&amp;Edit...</source>
      <translation>&amp;Muokkaa...</translation>
    </message>
    <message>
      <source>&amp;Add...</source>
      <translation>&amp;Lisää...</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>&amp;Poista</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>&amp;Sulje</translation>
    </message>
    <message>
      <source>&amp;New Script:</source>
      <translation>&amp;Uusi skripti:</translation>
    </message>
    <message>
      <source>&amp;No</source>
      <translation>&amp;Ei</translation>
    </message>
    <message>
      <source>&amp;Yes</source>
      <translation>&amp;Kyllä</translation>
    </message>
    <message>
      <source>Do you really want to delete this Script?</source>
      <translation>Haluatko poistaa tämän skriptin?</translation>
    </message>
  </context>
  <context>
    <name>KeyManager</name>
    <message>
      <source>Alt</source>
      <translation>Alt</translation>
    </message>
    <message>
      <source>Alt+</source>
      <translation>Alt+</translation>
    </message>
    <message>
      <source>Ctrl</source>
      <translation>Ctrl</translation>
    </message>
    <message>
      <source>Ctrl+</source>
      <translation>Ctrl+</translation>
    </message>
    <message>
      <source>Shift</source>
      <translation>Shift</translation>
    </message>
    <message>
      <source>Action</source>
      <translation>Toiminta</translation>
    </message>
    <message>
      <source>Shift+</source>
      <translation>Shift+</translation>
    </message>
    <message>
      <source>Manage Keyboard Shortcuts</source>
      <translation>Näppäinoikopolkujen hallinta</translation>
    </message>
    <message>
      <source>ALT+SHIFT+T</source>
      <translation>ALT+SHIFT+T</translation>
    </message>
    <message>
      <source>Select a Key for this Action</source>
      <translation>Valitse näppäinoikopolku toiminnolle</translation>
    </message>
    <message>
      <source>Current Key</source>
      <translation>Nykyinen näppäin</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>&amp;No Key</source>
      <translation>&amp;Ei näppäintä</translation>
    </message>
    <message>
      <source>&amp;User Defined Key</source>
      <translation>O&amp;ma näppäin</translation>
    </message>
    <message>
      <source>Set &amp;Key</source>
      <translation>&amp;Aseta näppäin</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>This Key Sequence is already in use</source>
      <translation>Tämä näppäinyhdistelmä on jo käytössä</translation>
    </message>
  </context>
  <context>
    <name>LayerPalette</name>
    <message>
      <source>Delete Layer</source>
      <translation>Poista taso</translation>
    </message>
    <message>
      <source>Lower Layer</source>
      <translation>Laske tasoa</translation>
    </message>
    <message>
      <source>Layers</source>
      <translation>Tasot</translation>
    </message>
    <message>
      <source>Raise Layer</source>
      <translation>Nosta tasoa</translation>
    </message>
    <message>
      <source>New Layer</source>
      <translation>Uusi taso</translation>
    </message>
    <message>
      <source>Add a new Layer</source>
      <translation>Uusi taso</translation>
    </message>
    <message>
      <source>Do you want to delete all Objects on this Layer too?</source>
      <translation>Haluatko myös tuhota kaikki kohteet tasolla?</translation>
    </message>
  </context>
  <context>
    <name>LineFormate</name>
    <message>
      <source>Open</source>
      <translation>Avaa</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
      <translation>Asiakirjat (*.sla *.sla.gz *.scd *.scd.gz);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Edit Line Styles</source>
      <translation>Muokkaa viivatyylejä</translation>
    </message>
    <message>
      <source>Documents (*.sla *.scd);;All Files (*)</source>
      <translation>Asiakirjat (*.sla *.scd);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>New Style</source>
      <translation>Uusi tyyli</translation>
    </message>
    <message>
      <source>Copy of %1</source>
      <translation>Kopio-%1</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>&amp;Append</source>
      <translation>&amp;Tuo</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>&amp;Uusi</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>&amp;Muokkaa</translation>
    </message>
    <message>
      <source>D&amp;uplicate</source>
      <translation>&amp;Kopioi</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>P&amp;oista</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>&amp;Tallenna</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>&amp;No</source>
      <translation>&amp;Ei</translation>
    </message>
    <message>
      <source>&amp;Yes</source>
      <translation>Ky&amp;llä</translation>
    </message>
    <message>
      <source>Do you really want to delete this Style?</source>
      <translation>Haluatko poistaa tämän tyylin?</translation>
    </message>
  </context>
  <context>
    <name>MSpinBox</name>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>pt</source>
      <translation>pt</translation>
    </message>
    <message>
      <source>mm</source>
      <translation>mm</translation>
    </message>
    <message>
      <source>in</source>
      <translation>in</translation>
    </message>
    <message>
      <source>p</source>
      <translation>p</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
  </context>
  <context>
    <name>Macro</name>
    <message>
      <source>Passed object is not callable</source>
      <comment>python error</comment>
      <translation>Välitetty olio ei oleva kutsuttavissa</translation>
    </message>
  </context>
  <context>
    <name>MacroManager</name>
    <message>
      <source>Manage Macros</source>
      <translation>Makrojen hallinta</translation>
    </message>
    <message>
      <source>Brings up a graphical window for creating, deleting, editing, saving and loading macros.</source>
      <translation>Näyttää ikkunan makrojen luomiselle, poistamiselle, muokkaamiselle, tallentamiselle ja lataamiselle.</translation>
    </message>
    <message>
      <source>Create, edit and delete macros</source>
      <translation>Luo, muokkaa ja poista makroja</translation>
    </message>
    <message>
      <source>&amp;Macro</source>
      <translation>&amp;Makro</translation>
    </message>
    <message>
      <source>Scribus - Macro Manager</source>
      <translation>Scribus - Makrojen hallinta</translation>
    </message>
    <message>
      <source>Unable to open the requested file: %1</source>
      <translation>Haluttua tiedostoa ei voida avata: %1</translation>
    </message>
    <message>
      <source>Scribus - Edit Macro</source>
      <translation>Scribus - Muokkaa makroja</translation>
    </message>
    <message>
      <source>&lt;qt>The macro name you requested is already taken  by another macro.&lt;/qt></source>
      <translation>&lt;qt>Makron nimi on jo varattu&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;qt>Macro creation failed. The macro manager was unable to set up the macro.&lt;/qt></source>
      <translation>&lt;qt>Makron luonti epäonnistui. Makron hallinta ei pystynyt toteuttamaan makroa.&lt;/qt></translation>
    </message>
    <message>
      <source>The macro '%1' has reported a minor error.
The error is: %2
A full traceback follows:

%3
</source>
      <translation>Makron '%1' suoritus aiheutti virheen.
Virhe: %2

%3
</translation>
    </message>
    <message>
      <source>The macro '%1' failed to execute correctly.
The error is: %2
A full traceback follows:

%3
</source>
      <translation>Makron '%1' suoritus epäonnistui.
Virhe: %2

%3</translation>
    </message>
    <message>
      <source>Scribus - New Macro</source>
      <translation>Scribus - Uusi makro</translation>
    </message>
    <message>
      <source>Enter name for new macro: </source>
      <translation>Anna nimi uudelle makrolle: </translation>
    </message>
  </context>
  <context>
    <name>ManageMacrosDialog</name>
    <message>
      <source>Scribus - Macro Manager</source>
      <translation>Scribus - Makrojen hallinta</translation>
    </message>
    <message>
      <source>Renaming the macro failed because the name is already in use.</source>
      <translation>Makron uudelleennimeäminen epäonnistui, koska samanniminen makro on jo olemassa.</translation>
    </message>
    <message>
      <source>Scribus - Manage Macros</source>
      <translation>Scribus - Makrojen hallinta</translation>
    </message>
    <message>
      <source>&lt;qt>&lt;p>This window is the Scribus Macro Manager. Here you can create macros, edit macros, etc. All changes are made using the buttons on the right hand side of the window.&lt;/p>
&lt;p>All changes made in this dialog take effect instantly - you cannot cancel the actions you make here.
The table in the center of the dialog lists what macros are currently loaded and some information about them. Use &quot;What's this&quot; on the table for more information.&lt;/p>&lt;/qt></source>
      <translation>&lt;qt>&lt;p>Scribuksen makron hallinnan ikkuna. Voit luoda, muokata ja poistaa makroja. Kaikki toiminnot ovat käytettävissä ikkunan oikeassa reunassa olevien painikkeiden avulla.&lt;/p>
&lt;p>Kaikki muutokset tulevat voimaan välittömästi eikä niitä ole mahdollista kumota.
Taulukko ikkunan keskellä listaa kaikki ladatut makrot ja tietoa näistä.&lt;/p>&lt;/qt></translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>&amp;Uusi</translation>
    </message>
    <message>
      <source>Alt+N</source>
      <translation>Alt+N</translation>
    </message>
    <message>
      <source>&lt;qt>Create a new macro.&lt;/qt></source>
      <translation>&lt;qt>Luo uusi makro&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;qt>Create a new macro by prompting for the macro name then bringing up the edit macro dialog box.&lt;/qt></source>
      <translation>&lt;qt>Luo uusi makro&lt;/qt></translation>
    </message>
    <message>
      <source>&amp;Ok</source>
      <translation>&amp;Ok</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>Close this dialog</source>
      <translation>Sulje dialogi</translation>
    </message>
    <message>
      <source>Return to Scribus</source>
      <translation>Palaa Scribukseen</translation>
    </message>
    <message>
      <source>Macro</source>
      <translation>Makro</translation>
    </message>
    <message>
      <source>Edit</source>
      <translation>Muokkaa</translation>
    </message>
    <message>
      <source>Accel</source>
      <translation>Lisäpainike</translation>
    </message>
    <message>
      <source>Description</source>
      <translation>Kuvaus</translation>
    </message>
    <message>
      <source>Rena&amp;me</source>
      <translation>&amp;Nimeä uudelleen</translation>
    </message>
    <message>
      <source>Alt+M</source>
      <translation>Alt+M</translation>
    </message>
    <message>
      <source>Rename the selected macro.</source>
      <translation>Nimeä valittu makro uudelleen.</translation>
    </message>
    <message>
      <source>&lt;qt>Rename the selected macro. You will be prompted for the new name.&lt;/qt></source>
      <translation>&lt;qt>Nimeä valittu makro uudelleen.&lt;/qt></translation>
    </message>
    <message>
      <source>&amp;Edit...</source>
      <translation>&amp;Muokkaa...</translation>
    </message>
    <message>
      <source>Alt+E</source>
      <translation>Alt+E</translation>
    </message>
    <message>
      <source>&lt;qt>Edit the source of the selected macro, if the source is availible.&lt;/qt></source>
      <translation>&lt;qt>Muokkaa valitun makron lähdekoodia, jos se on saatavilla.&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;p>Edit the selected macro. &lt;/p>
&lt;p>If this button is greyed out, either there is no selected macro or the macro manager does not have the source code for the macro you have selected (in which case &lt;tt>No&lt;/tt> will be shown in the &lt;tt>Edit &lt;/tt>column of the macro).&lt;/p>
&lt;p>If Scribus doesn't have the source, the macro was probably created by a script.&lt;/p></source>
      <translation>&lt;p>Muokkaa valittua makroa.&lt;/p>
&lt;p>Jos painike on poissa käytöstä, valittuna ei ole yhtään makroa tai makron hallinnalla ei ole lähdekoodia valitulle makrolle.&lt;/p>
&lt;p>Jos Scribus ei löydä makron lähdekoodia, makro luultavasti luotiin skriptillä.&lt;/p></translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>&amp;Poista</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>&lt;qt>Delete the currently selected macro.&lt;/qt></source>
      <translation>&lt;qt>Poista valittu makro&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;p>Delete the selected macro. This is instant, and there is no way to recover the macro once deleted. If the macro is created by a start-up script, it will reappear next time you load Scribus.&lt;/p></source>
      <translation>&lt;p>Poista valittu makro. Poistaminen tapahtuu välittömästi eikä sitä ole mahdollista kumota. Jos makro luotiin käynnistysskriptissä, se saadaan takaisin käyttöön seuraavalla Scribuksen käynnistyskerralla.&lt;/p></translation>
    </message>
    <message>
      <source>&amp;Set Accel</source>
      <translation>&amp;Aseta lisäpainike</translation>
    </message>
    <message>
      <source>Alt+S</source>
      <translation>Alt+S</translation>
    </message>
    <message>
      <source>&lt;qt>Set the keyboard shortcut for the selected macro.&lt;/qt></source>
      <translation>&lt;qt>Aseta näppäinoikopolku valitulle makrolle&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;p>Set the keyboard shortcut (accelerator) key of the selected macro. You will be prompted for the new shortcut in a dialog box.&lt;/p></source>
      <translation>&lt;p>Aseta näppäinyhdistelmä (lisäpainike) valitulle makrolle.&lt;/p></translation>
    </message>
    <message>
      <source>E&amp;xport</source>
      <translation>&amp;Vie</translation>
    </message>
    <message>
      <source>Alt+X</source>
      <translation>Alt+X</translation>
    </message>
    <message>
      <source>Export macros to a file.</source>
      <translation>Tallenna makrot tiedostoon.</translation>
    </message>
    <message>
      <source>&lt;p>Export macros to an external file. The file will be a Python script containing the scripter commands to re-create the macros. It can be run using &lt;tt>Load extension script&lt;/tt> from the &lt;tt>Script&lt;/tt> menu, or the import button in the macro manager.&lt;/p>
&lt;p>If you want a nice, human readable version of your macros, select the macro you want, press the &lt;tt>Edit&lt;/tt>  button, and use the &lt;tt>Save source&lt;/tt> button in the &lt;tt>Edit Macro&lt;/tt> dialog. You won't be able to load that version with &lt;tt>Load extension script&lt;/tt> - instead, create a new macro with the&lt;tt> New&lt;/tt> button and use &lt;tt>Load source&lt;/tt>.&lt;/p></source>
      <translation>&lt;p>Vie makrot tiedostoon. Tiedosto käsittää Python-skriptin, joka sisältää komennot makron uudelleen luomiseksi. Tiedostoa voidaan käyttää &lt;tt>laajennusskriptinä&lt;/tt> &lt;tt>Skriptivalikossa&lt;/tt> tai tuotaessa makroa &quot;Tuo makro&quot;-painikkeella.&lt;/p>
&lt;p>Jos haluat siistin ja luettavan version makrostasi, valitse makro ja paina &lt;tt>muokkauspainiketta&lt;/tt>. Tallenna koodi &lt;tt>Muokkaa makroa&lt;/tt> valikon kohdasta &lt;tt>Tallenna koodi&lt;/p. Näin luotua makroa ei voida käyttää &lt;tt>laajennusskriptinä&lt;/tt>. Sen sijaan luo uusi makro ja lataa koodi siihen.&lt;/p></translation>
    </message>
    <message>
      <source>Delete &amp;All</source>
      <translation>Poista &amp;kaikki</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>Delete all macros.</source>
      <translation>Poista kaikki makrot.</translation>
    </message>
    <message>
      <source>&lt;p>Delete all registered macros. This is instant, and there is no way to recover the deleted macros. Any macros created by your start-up script will reappear next time you load Scribus.&lt;/p></source>
      <translation>&lt;p>Poista kaikki rekisteröidyt makrot. Poistaminen tapahtuu välittömästi eikä sitä ole mahdollista kumota. Käynnistysskriptissä määritellyt makrot saadaan uudestaan käyttöön seuraavalla Scribuksen käynnistyskerralla.&lt;/p></translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation>T&amp;uo</translation>
    </message>
    <message>
      <source>Alt+I</source>
      <translation>Alt+I</translation>
    </message>
    <message>
      <source>Import macros from a file.</source>
      <translation>Tuo makrot tiedostosta.</translation>
    </message>
    <message>
      <source>&lt;p>Loads macros from an external file.&lt;/p></source>
      <translation>&lt;p>Lataa makrot tiedostosta&lt;/p></translation>
    </message>
    <message>
      <source>Scribus Macro Files (*.pymacro)</source>
      <translation>Scribus makrotiedostot (*pymacro)</translation>
    </message>
    <message>
      <source>Open File Dialog</source>
      <translation>Avaa tiedosto</translation>
    </message>
    <message>
      <source>Select the macro file to load.</source>
      <translation>Valitse ladattava makrotiedosto.</translation>
    </message>
    <message>
      <source>Save File Dialog</source>
      <translation>Tallenna tiedosto</translation>
    </message>
    <message>
      <source>Save all macros</source>
      <translation>Tallenna kaikki makrot</translation>
    </message>
    <message>
      <source>Scribus - Rename Macro</source>
      <translation>Scribus - Nimeä makro uudelleen</translation>
    </message>
    <message>
      <source>Enter new name: </source>
      <translation>Anna uusi nimi: </translation>
    </message>
    <message>
      <source>Scribus - Set Macro Shortcut</source>
      <translation>Scribus - Aseta makron näppäinyhdistelmä</translation>
    </message>
    <message>
      <source>Enter new shortcut: </source>
      <translation>Anna uusi näppäinyhdistelmä: </translation>
    </message>
    <message>
      <source>Yes</source>
      <translation>Kyllä</translation>
    </message>
    <message>
      <source>No</source>
      <translation>Ei</translation>
    </message>
    <message>
      <source>&lt;p>This table lists the macros that are currently defined.&lt;/p>

&lt;p>&lt;b>Macro:&lt;/b> The name of the macro, as shown in the menu bar and in other places around Scribus.&lt;/p>
&lt;p>&lt;b>Edit:&lt;/b> If the macro can be edited, &quot;Yes&quot; appears in this column. Usually if a macro cannot be edited it was created using the register_macro command in a script.&lt;/p>
&lt;p>&lt;b>Accel:&lt;/b> The menu shortcut key sequence, if any, associated with the macro. For example, CTRL-F8 means that you can press Control-F8 when in Scribus to run the macro.&lt;/p>
&lt;p>&lt;b>Description:&lt;/b> If the macro contains a &quot;docstring&quot;, a special string at the start of its definition that describes it, that is shown here. If the docstring is long, only the beginning is shown - use &quot;What's This&quot; on the macro's entry in the Macro menu to see the full description.&lt;/p></source>
      <translation>&lt;p>Tällä hetkellä määritellyt makrot&lt;/p> 

&lt;p>&lt;b>Makro:&lt;/b> Makron nimi, joka näkyy valikoissa.&lt;/p> 
&lt;p>&lt;b>Muokkaus&lt;/b> Jos makron muokkaus on mahdollista tässä sarakkeessa näkyy &quot;Kyllä&quot;. Jos makron muokkaus ei ole mahdollista, se luotiin skriptissä käyttämällä register_macro-komentoa.&lt;/p> 
&lt;p>&lt;b>Oikopolku:&lt;/b> Näppäinoikopolku makrolle. Esimerkiksi CTRL+F8 tarkoittaa, että painamalla näppäimet CTRL ja F8 Scribuksessa ajaa makron.&lt;/p> 
&lt;p>&lt;b>Kuvaus:&lt;/b> Jos makro sisältää &quot;docstring&quot; -muuttujan, se näytetään tässä. Ylipitkä &quot;docstring&quot; katkaistaan. Katkaistun kuvauksen saa näkyviin käyttämällä &quot;Mikä tämä on&quot; -ominaisuutta.&lt;/p></translation>
    </message>
  </context>
  <context>
    <name>Mdup</name>
    <message>
      <source>Multiple Duplicate</source>
      <translation>Kopioi</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
    <message>
      <source>&amp;Number of Copies:</source>
      <translation>&amp;Kopioiden lukumäärä:</translation>
    </message>
    <message>
      <source>&amp;Horizontal Shift:</source>
      <translation>&amp;Vaakasuora siirtymä:</translation>
    </message>
    <message>
      <source>&amp;Vertical Shift:</source>
      <translation>P&amp;ystysuora siirtymä:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>Measurements</name>
    <message>
      <source>Distances</source>
      <translation>Etäisyydet</translation>
    </message>
    <message>
      <source>X1:</source>
      <translation>X1:</translation>
    </message>
    <message>
      <source>Y1:</source>
      <translation>Y1:</translation>
    </message>
    <message>
      <source>X2:</source>
      <translation>X2:</translation>
    </message>
    <message>
      <source>Y2:</source>
      <translation>Y2:</translation>
    </message>
    <message>
      <source>DX:</source>
      <translation>DX:</translation>
    </message>
    <message>
      <source>DY:</source>
      <translation>DY:</translation>
    </message>
    <message>
      <source>Angle:</source>
      <translation>Kulma:</translation>
    </message>
    <message>
      <source>Length:</source>
      <translation>Pituus:</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
  </context>
  <context>
    <name>MergeDoc</name>
    <message>
      <source>Open</source>
      <translation>Avaa</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
      <translation>Asiakirjat (*.sla *.sla.gz *.scd *.scd.gz);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
    <message>
      <source>Import</source>
      <translation>Tuo</translation>
    </message>
    <message>
      <source>Documents (*.sla *.scd);;All Files (*)</source>
      <translation>Asiakirjat (*.sla *.scd);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Change...</source>
      <translation>Muuta...</translation>
    </message>
    <message>
      <source>Import Template</source>
      <translation>Tuo sivumalli</translation>
    </message>
    <message>
      <source>Import Page(s)</source>
      <translation>Tuo sivu(ja)</translation>
    </message>
    <message>
      <source>From Document:</source>
      <translation>Asiakirjasta:</translation>
    </message>
    <message>
      <source>Import Page(s):</source>
      <translation>Tuo sivu(t):</translation>
    </message>
    <message>
      <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
      <translation>Syötä pilkuin eroteltu lista tuotavista sivuista.
Pelkän sivunumeron lisäksi voit käyttää
* kuvaamaan kaikkia sivuja tai 1-5 sivuväliä.</translation>
    </message>
    <message>
      <source> from 0</source>
      <translation>/ 0</translation>
    </message>
    <message>
      <source>Create Page(s)</source>
      <translation>Luo sivu(t)</translation>
    </message>
    <message>
      <source>before Page</source>
      <translation>Ennen sivua</translation>
    </message>
    <message>
      <source>after Page</source>
      <translation>Jälkeen sivun</translation>
    </message>
    <message>
      <source>at End</source>
      <translation>Loppuun</translation>
    </message>
    <message>
      <source> from %1</source>
      <translation>/ %1</translation>
    </message>
  </context>
  <context>
    <name>MovePages</name>
    <message>
      <source>to:</source>
      <translation>minne:</translation>
    </message>
    <message>
      <source>Move Page(s):</source>
      <translation>Siirrä sivu(t):</translation>
    </message>
    <message>
      <source>at End</source>
      <translation>Loppuun</translation>
    </message>
    <message>
      <source>Move Pages</source>
      <translation>Siirrä sivut</translation>
    </message>
    <message>
      <source>Copy Page</source>
      <translation>Kopioi sivu</translation>
    </message>
    <message>
      <source>before Page</source>
      <translation>Ennen sivua</translation>
    </message>
    <message>
      <source>after Page</source>
      <translation>Jälkeen sivun</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>Mpalette</name>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nimi</translation>
    </message>
    <message>
      <source>None</source>
      <translation>Ei väriä</translation>
    </message>
    <message>
      <source>Level</source>
      <translation>Kerros</translation>
    </message>
    <message>
      <source>Absolute Colorimetric</source>
      <translation>Absolute Colorimetric</translation>
    </message>
    <message>
      <source>No Style</source>
      <translation>Ei tyyliä</translation>
    </message>
    <message>
      <source>Flat Cap</source>
      <translation>Litteä</translation>
    </message>
    <message>
      <source>Distance from Curve:</source>
      <translation>Etäisyys käyrästä:</translation>
    </message>
    <message>
      <source>Round Join</source>
      <translation>Pyöreä</translation>
    </message>
    <message>
      <source>Rendering Intent:</source>
      <translation>Sovitustapa:</translation>
    </message>
    <message>
      <source>Font Size</source>
      <translation>Kirjaintyypin koko</translation>
    </message>
    <message>
      <source>End Points</source>
      <translation>Päätepisteet</translation>
    </message>
    <message>
      <source>Shape:</source>
      <translation>Kuvio:</translation>
    </message>
    <message>
      <source>Name &quot;%1&quot; isn't unique.
Please choose another.</source>
      <translation>Nimi &quot;%1&quot; on jo olemassa.
Valitse toinen nimi.</translation>
    </message>
    <message>
      <source>Left Point</source>
      <translation>Vasen piste</translation>
    </message>
    <message>
      <source>Custom Spacing</source>
      <translation>Oma välistys</translation>
    </message>
    <message>
      <source>Properties</source>
      <translation>Ominaisuudet</translation>
    </message>
    <message>
      <source>Square Cap</source>
      <translation>Neliö</translation>
    </message>
    <message>
      <source>Show Curve</source>
      <translation>Näytä käyrä</translation>
    </message>
    <message>
      <source>Perceptual</source>
      <translation>Perceptual</translation>
    </message>
    <message>
      <source>Relative Colorimetric</source>
      <translation>Relative Colorimetric</translation>
    </message>
    <message>
      <source>Bevel Join</source>
      <translation>Tasainen</translation>
    </message>
    <message>
      <source>Miter Join</source>
      <translation>Viisto</translation>
    </message>
    <message>
      <source>Round Cap</source>
      <translation>Pyöreä</translation>
    </message>
    <message>
      <source>Geometry</source>
      <translation>Sijainti ja koko</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation>Saturaatio</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>Distance of Text</source>
      <translation>Tekstin etäisyys kehyksestä</translation>
    </message>
    <message>
      <source>Line Spacing</source>
      <translation>Riviväli</translation>
    </message>
    <message>
      <source>Start Offset:</source>
      <translation>Alkupisteen siirtymä:</translation>
    </message>
    <message>
      <source>Basepoint:</source>
      <translation>Toimintapiste:</translation>
    </message>
    <message>
      <source>Input Profile:</source>
      <translation>Tuloprofiili:</translation>
    </message>
    <message>
      <source>Shade:</source>
      <translation>Sävy:</translation>
    </message>
    <message>
      <source>Name of selected object</source>
      <translation>Valitun kohteen nimi</translation>
    </message>
    <message>
      <source>Horizontal position of current basepoint</source>
      <translation>Toimintapisteen vaakasuora sijainti</translation>
    </message>
    <message>
      <source>Vertical position of current basepoint</source>
      <translation>Toimintapisteen pystysuora sijainti</translation>
    </message>
    <message>
      <source>Width</source>
      <translation>Leveys</translation>
    </message>
    <message>
      <source>Height</source>
      <translation>Korkeus</translation>
    </message>
    <message>
      <source>Rotation of object at current basepoint</source>
      <translation>Kohteen kierto valitun toimintapisteen ympäri</translation>
    </message>
    <message>
      <source>Point from which measurements or rotation angles are referenced</source>
      <translation>Piste, josta kohteen sijainti ja kierto lasketaan</translation>
    </message>
    <message>
      <source>Select top left for basepoint</source>
      <translation>Valitse vasen yläkulma toimintapisteeksi</translation>
    </message>
    <message>
      <source>Select top right for basepoint</source>
      <translation>Valitse oikea yläkulma toimintapisteeksi</translation>
    </message>
    <message>
      <source>Select bottom left for basepoint</source>
      <translation>Valitse vasen alakulma toimintapisteeksi</translation>
    </message>
    <message>
      <source>Select bottom right for basepoint</source>
      <translation>Valitse oikea alakulma toimintapisteeksi</translation>
    </message>
    <message>
      <source>Select center for basepoint</source>
      <translation>Valitse keskusta toimintapisteeksi</translation>
    </message>
    <message>
      <source>Flip Horizontal</source>
      <translation>Käännä vaakatasossa</translation>
    </message>
    <message>
      <source>Flip Vertical</source>
      <translation>Käännä pystytasossa</translation>
    </message>
    <message>
      <source>Move one level up</source>
      <translation>Siirrä yksi kerros ylöspäin</translation>
    </message>
    <message>
      <source>Move one level down</source>
      <translation>Siirrä yksi kerros alaspäin</translation>
    </message>
    <message>
      <source>Move to front</source>
      <translation>Siirrä päällimmäiseksi</translation>
    </message>
    <message>
      <source>Move to back</source>
      <translation>Siirrä alimmaiseksi</translation>
    </message>
    <message>
      <source>Lock or unlock the object</source>
      <translation>Lukitse tai vapauta kohde</translation>
    </message>
    <message>
      <source>Lock or unlock the size of the object</source>
      <translation>Lukitse tai vapauta kohteen koko</translation>
    </message>
    <message>
      <source>Enable or disable printing of the object</source>
      <translation>Tulosta/Älä tulosta kohdetta</translation>
    </message>
    <message>
      <source>Font of selected text or object</source>
      <translation>Valitun kohteen kirjaintyyppi</translation>
    </message>
    <message>
      <source>Scaling width of characters</source>
      <translation>Merkkien leveyssuuntainen skaalaus</translation>
    </message>
    <message>
      <source>Color of text stroke</source>
      <translation>Tekstin reunan väri</translation>
    </message>
    <message>
      <source>Color of text fill</source>
      <translation>Tekstin täytön väri</translation>
    </message>
    <message>
      <source>Saturation of color of text stroke</source>
      <translation>Tekstin reunan värin kylläisyys</translation>
    </message>
    <message>
      <source>Saturation of color of text fill</source>
      <translation>Tekstin täytön värin kylläisyys</translation>
    </message>
    <message>
      <source>Style of current paragraph</source>
      <translation>Valitun kappaleen tyyli</translation>
    </message>
    <message>
      <source>Change settings for left or end points</source>
      <translation>Muuta viivan vasemman pisteen tai päätepisteitten asetuksia</translation>
    </message>
    <message>
      <source>Pattern of line</source>
      <translation>Viivan kuvio</translation>
    </message>
    <message>
      <source>Thickness of line</source>
      <translation>Viivan paksuus</translation>
    </message>
    <message>
      <source>Type of line joins</source>
      <translation>Kulmien tyyli</translation>
    </message>
    <message>
      <source>Type of line end</source>
      <translation>Viivan pään tyyli</translation>
    </message>
    <message>
      <source>Line style of current object</source>
      <translation>Valitun kohteen viivatyyli</translation>
    </message>
    <message>
      <source>Choose the shape of frame...</source>
      <translation>Valitse kehyksen kuvio...</translation>
    </message>
    <message>
      <source>Edit shape of the frame...</source>
      <translation>Muokkaa kehyksen kuviota...</translation>
    </message>
    <message>
      <source>Set radius of corner rounding</source>
      <translation>Aseta kulman pyöristyksen säde</translation>
    </message>
    <message>
      <source>Number of columns in text frame</source>
      <translation>Tekstikehyksen palstojen lukumäärä</translation>
    </message>
    <message>
      <source>Distance between columns</source>
      <translation>Palstojen välinen etäisyys</translation>
    </message>
    <message>
      <source>Distance of text from top of frame</source>
      <translation>Tekstin etäisyys kehyksen yläreunasta</translation>
    </message>
    <message>
      <source>Distance of text from bottom of frame</source>
      <translation>Tekstin etäisyys kehyksen alareunasta</translation>
    </message>
    <message>
      <source>Distance of text from left of frame</source>
      <translation>Tekstin etäisyys kehyksen vasemmasta reunasta</translation>
    </message>
    <message>
      <source>Distance of text from right of frame</source>
      <translation>Tekstin etäisyys oikeasta reunasta</translation>
    </message>
    <message>
      <source>Edit tab settings of text frame...</source>
      <translation>Muokkaa tekstikehyksen sarkainasetuksia...</translation>
    </message>
    <message>
      <source>Allow the image to be a different size to the frame</source>
      <translation>Salli kuvan koon poiketa kehyksen koosta</translation>
    </message>
    <message>
      <source>Horizontal offset of image within frame</source>
      <translation>Kuvan siirtymä vaakatasossa kehyksen sisällä</translation>
    </message>
    <message>
      <source>Vertical offset of image within frame</source>
      <translation>Kuvan siirtymä pystytasossa kehyksen sisällä</translation>
    </message>
    <message>
      <source>Resize the image horizontally</source>
      <translation>Muuta kuvan kokoa vaakasuunnassa</translation>
    </message>
    <message>
      <source>Resize the image vertically</source>
      <translation>Muuta kuvan kokoa pystysuunnassa</translation>
    </message>
    <message>
      <source>Keep the X and Y scaling the same</source>
      <translation>Säilytä vaaka- ja pystysivujen suhde</translation>
    </message>
    <message>
      <source>Make the image fit within the size of the frame</source>
      <translation>Sovita kuva kehyksen kokoon</translation>
    </message>
    <message>
      <source>Use image proportions rather than those of the frame</source>
      <translation>Käytä kuvan sivujen suhteita kehyksen suhteiden sijaan</translation>
    </message>
    <message>
      <source>Cell Lines</source>
      <translation>Solun reunat</translation>
    </message>
    <message>
      <source>Line at Top</source>
      <translation>Viiva ylhäällä</translation>
    </message>
    <message>
      <source>Line at the Left</source>
      <translation>Viiva vasemmalla</translation>
    </message>
    <message>
      <source>Line at the Right </source>
      <translation>Viiva oikealla</translation>
    </message>
    <message>
      <source>Line at Bottom</source>
      <translation>Viiva alhaalla</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
    <message>
      <source>Keep the aspect ratio</source>
      <translation>Säilytä suhteet</translation>
    </message>
    <message>
      <source>Source profile of the image</source>
      <translation>Kuvan profiili</translation>
    </message>
    <message>
      <source>Rendering intent for the image</source>
      <translation>Kuvan sovitustapa</translation>
    </message>
    <message>
      <source>Switches between Gap or Column width</source>
      <translation>Vaihda palstan tai palstojen välin leveys</translation>
    </message>
    <message>
      <source>Column width</source>
      <translation>Palstan leveys</translation>
    </message>
    <message>
      <source>Path Text Properties</source>
      <translation>Polulla olevan tekstin ominaisuudet</translation>
    </message>
    <message>
      <source>Make text in lower frames flow around the object shape</source>
      <translation>Pakota alempien kehysten teksti kiertämään kohteen muoto</translation>
    </message>
    <message>
      <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
      <translation>Ilmaisee kerroksen jolla kohde on. 0 kertoo kohteen olevan alimmaisena</translation>
    </message>
    <message>
      <source>X, Y, &amp;Z</source>
      <translation>X, Y, &amp;Z</translation>
    </message>
    <message>
      <source>&amp;Shape</source>
      <translation>&amp;Kuvio</translation>
    </message>
    <message>
      <source>&amp;Text</source>
      <translation>&amp;Teksti</translation>
    </message>
    <message>
      <source>&amp;Image</source>
      <translation>K&amp;uva</translation>
    </message>
    <message>
      <source>&amp;Line</source>
      <translation>&amp;Viiva</translation>
    </message>
    <message>
      <source>&amp;Colors</source>
      <translation>V&amp;ärit</translation>
    </message>
    <message>
      <source>&amp;X-Pos:</source>
      <translation>&amp;X:</translation>
    </message>
    <message>
      <source>&amp;Y-Pos:</source>
      <translation>&amp;Y:</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>&amp;Leveys:</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>&amp;Korkeus:</translation>
    </message>
    <message>
      <source>&amp;Rotation:</source>
      <translation>Ki&amp;erto:</translation>
    </message>
    <message>
      <source>Text &amp;Flows Around Frame</source>
      <translation>&amp;Teksti kiertää kehyksen</translation>
    </message>
    <message>
      <source>Use &amp;Bounding Box</source>
      <translation>Käytä &amp;rajausaluetta</translation>
    </message>
    <message>
      <source>&amp;Use Contour Line</source>
      <translation>&amp;Käytä reunusta</translation>
    </message>
    <message>
      <source>&amp;Edit Shape...</source>
      <translation>&amp;Muokkaa kuviota...</translation>
    </message>
    <message>
      <source>R&amp;ound
Corners:</source>
      <translation>&amp;Pyöristä kulmia:</translation>
    </message>
    <message>
      <source>Colu&amp;mns:</source>
      <translation>&amp;Palstoja:</translation>
    </message>
    <message>
      <source>&amp;Gap:</source>
      <translation>&amp;Väli:</translation>
    </message>
    <message>
      <source>To&amp;p:</source>
      <translation>&amp;Ylhäällä:</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation>&amp;Alhaalla:</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation>&amp;Vasen:</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation>&amp;Oikea:</translation>
    </message>
    <message>
      <source>T&amp;abulators...</source>
      <translation>&amp;Sarkaimet...</translation>
    </message>
    <message>
      <source>&amp;Font Size:</source>
      <translation>&amp;Kirjaintyypin koko:</translation>
    </message>
    <message>
      <source>L&amp;ine Spacing:</source>
      <translation>&amp;Riviväli:</translation>
    </message>
    <message>
      <source>St&amp;yle:</source>
      <translation>T&amp;yyli:</translation>
    </message>
    <message>
      <source>Lan&amp;guage:</source>
      <translation>&amp;Kieli:</translation>
    </message>
    <message>
      <source>&amp;Free Scaling</source>
      <translation>&amp;Ei skaalausta</translation>
    </message>
    <message>
      <source>X-Sc&amp;ale:</source>
      <translation>Skaalaa &amp;vaakatasossa:</translation>
    </message>
    <message>
      <source>Y-Scal&amp;e:</source>
      <translation>Skaalaa &amp;pystytasossa:</translation>
    </message>
    <message>
      <source>Scale &amp;To Frame Size</source>
      <translation>Skaalaa &amp;kehyksen kokoon</translation>
    </message>
    <message>
      <source>P&amp;roportional</source>
      <translation>&amp;Säilytä suhteet</translation>
    </message>
    <message>
      <source>&amp;Basepoint:</source>
      <translation>&amp;Toimintapiste:</translation>
    </message>
    <message>
      <source>T&amp;ype of Line:</source>
      <translation>&amp;Viivan tyyli:</translation>
    </message>
    <message>
      <source>Line &amp;Width:</source>
      <translation>Viivan &amp;leveys:</translation>
    </message>
    <message>
      <source>Ed&amp;ges:</source>
      <translation>&amp;Kulmat:</translation>
    </message>
    <message>
      <source>&amp;Endings:</source>
      <translation>&amp;Päät:</translation>
    </message>
    <message>
      <source>&amp;X1:</source>
      <translation>&amp;X1:</translation>
    </message>
    <message>
      <source>X&amp;2:</source>
      <translation>X&amp;2:</translation>
    </message>
    <message>
      <source>Y&amp;1:</source>
      <translation>Y&amp;1:</translation>
    </message>
    <message>
      <source>&amp;Y2:</source>
      <translation>&amp;Y2:</translation>
    </message>
    <message>
      <source>Hyphenation language of frame</source>
      <translation>Kehyksen tavutuksen kieli</translation>
    </message>
    <message>
      <source>Use a surrounding box instead of the frame's shape for text flow</source>
      <translation>Käytä ympäröivää kehystä kohteen muodon sijaan tekstin kierron rajana</translation>
    </message>
    <message>
      <source>Use a second line originally based on the frame's shape for text flow</source>
      <translation>Käytä vapaasti muokattavaa reunusta tekstin kierron rajana</translation>
    </message>
    <message>
      <source>Right to Left Writing</source>
      <translation>Kirjoitus oikealta vasemmalle</translation>
    </message>
    <message>
      <source>Trac&amp;king:</source>
      <translation>&amp;Merkkiväli:</translation>
    </message>
    <message>
      <source>Manual Tracking</source>
      <translation>Oma merkkiväli</translation>
    </message>
  </context>
  <context>
    <name>MultiLine</name>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source> pt </source>
      <translation> pt </translation>
    </message>
    <message>
      <source>Flat Cap</source>
      <translation>Litteä</translation>
    </message>
    <message>
      <source>Dash Dot Dot Line</source>
      <translation>Viiva-piste-piste-viiva</translation>
    </message>
    <message>
      <source>Round Join</source>
      <translation>Pyöreä</translation>
    </message>
    <message>
      <source>Line Width:</source>
      <translation>Viivan leveys:</translation>
    </message>
    <message>
      <source>Name &quot;%1&quot; isn't unique.
Please choose another.</source>
      <translation>Nimi &quot;%1&quot; on jo käytössä.
Valitse toinen nimi.</translation>
    </message>
    <message>
      <source>Edit Style</source>
      <translation>Muokkaa tyylejä</translation>
    </message>
    <message>
      <source>Square Cap</source>
      <translation>Neliö</translation>
    </message>
    <message>
      <source>Dashed Line</source>
      <translation>Katkoviiva</translation>
    </message>
    <message>
      <source>Dotted Line</source>
      <translation>Pisteviiva</translation>
    </message>
    <message>
      <source>Bevel Join</source>
      <translation>Tasainen</translation>
    </message>
    <message>
      <source>Miter Join</source>
      <translation>Viisto</translation>
    </message>
    <message>
      <source>Round Cap</source>
      <translation>Pyöreä</translation>
    </message>
    <message>
      <source>Dash Dot Line</source>
      <translation>Viiva-piste-viiva</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>Solid Line</source>
      <translation>Yhtenäinen viiva</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>MusterSeiten</name>
    <message>
      <source>Copy #%1 of </source>
      <translation>Kopio #%1/</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>Normal</translation>
    </message>
    <message>
      <source>Copy of %1</source>
      <translation>Kopio-%1</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>New Template</source>
      <translation>Uusi sivumalli</translation>
    </message>
    <message>
      <source>Edit Templates</source>
      <translation>Muokkaa malleja</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>Nimi:</translation>
    </message>
    <message>
      <source>&amp;Append</source>
      <translation>&amp;Tuo</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>&amp;Uusi</translation>
    </message>
    <message>
      <source>D&amp;uplicate</source>
      <translation>&amp;Kopioi</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>&amp;Poista</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>&amp;Sulje</translation>
    </message>
    <message>
      <source>&amp;No</source>
      <translation>&amp;Ei</translation>
    </message>
    <message>
      <source>&amp;Yes</source>
      <translation>Ky&amp;llä</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>&amp;Nimi:</translation>
    </message>
    <message>
      <source>Do you really want to delete this Template?</source>
      <translation>Haluatko poistaa tämän mallin?</translation>
    </message>
    <message>
      <source>New Template %1</source>
      <translation>Uusi malli %1</translation>
    </message>
  </context>
  <context>
    <name>NewDoc</name>
    <message>
      <source>Points (pts)</source>
      <translation>Pisteet (pts)</translation>
    </message>
    <message>
      <source>New Document</source>
      <translation>Uusi asiakirja</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>Oma</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>Vaakasuora</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>Asetukset</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>Pystysuora</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation>Sivun reunukset</translation>
    </message>
    <message>
      <source>Picas (p)</source>
      <translation>Picat (p)</translation>
    </message>
    <message>
      <source>Inches (in)</source>
      <translation>Tuumat (in)</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>Sivun koko</translation>
    </message>
    <message>
      <source>Column Guides</source>
      <translation>Palstat</translation>
    </message>
    <message>
      <source>Millimetres (mm)</source>
      <translation>Millimetrit (mm)</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
    <message>
      <source>Document page size, either a standard size or a custom size</source>
      <translation>Asiakirjan sivun koko. Standardi tai itse määrittämäsi koko</translation>
    </message>
    <message>
      <source>Orientation of the document's pages</source>
      <translation>Asiakirjan sivujen suunta</translation>
    </message>
    <message>
      <source>Width of the document's pages, editable if you have chosen a custom page size</source>
      <translation>Asiakirjan sivujen leveys. Muokattavissa, jos valitset kooksi &quot;Oma&quot;</translation>
    </message>
    <message>
      <source>Height of the document's pages, editable if you have chosen a custom page size</source>
      <translation>Asiakirjan sivujen korkeus. Muokattavissa jos valitset kooksi &quot;Oma&quot;</translation>
    </message>
    <message>
      <source>Enable single or spread based layout</source>
      <translation>Sivu- tai aukeamakeskeinen ulkonäkö</translation>
    </message>
    <message>
      <source>Make the first page the left page of the document</source>
      <translation>Tee vasemmasta sivusta asiakirjan ensimmäinen sivu</translation>
    </message>
    <message>
      <source>Distance between the top margin guide and the edge of the page</source>
      <translation>Paperin reunan ja yläreunuksen välinen etäisyys</translation>
    </message>
    <message>
      <source>Distance between the bottom margin guide and the edge of the page</source>
      <translation>Paperin reunan ja alareunuksen välinen etäisyys</translation>
    </message>
    <message>
      <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
      <translation>Paperin reunan ja vasemman reunuksen välinen etäisyys.
Jos vastakkaiset sivut on valittuna, leveys määrittää oikean kokoisen reunuksen ottaen sidonnan huomioon</translation>
    </message>
    <message>
      <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
      <translation>Paperin reunan ja oikean reunuksen välinen etäisyys.
Jos vastakkaiset sivut on valittuna, leveys määrittää oikean kokoisen reunuksen ottaen sidonnan huomioon</translation>
    </message>
    <message>
      <source>First page number of the document</source>
      <translation>Asiakirjan ensimmäinen sivunumero</translation>
    </message>
    <message>
      <source>Default unit of measurement for document editing</source>
      <translation>Asiakirjan muokkauksessa käytettävä mittayksikkö</translation>
    </message>
    <message>
      <source>Create text frames automatically when new pages are added</source>
      <translation>Luo tekstikehykset automaattisesti uusia sivuja lisättäessä</translation>
    </message>
    <message>
      <source>Distance between automatically created columns</source>
      <translation>Automaattisesti luotujen tekstikehysten palstojen väli</translation>
    </message>
    <message>
      <source>Number of columns to create in automatically created text frames</source>
      <translation>Automaattisesti luotujen tekstikehysten palstojen lukumäärä</translation>
    </message>
    <message>
      <source>Legal</source>
      <translation>Legal</translation>
    </message>
    <message>
      <source>Letter</source>
      <translation>Letter</translation>
    </message>
    <message>
      <source>Tabloid</source>
      <translation>Tabloid</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>&amp;Koko:</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>&amp;Leveys:</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>Ko&amp;rkeus:</translation>
    </message>
    <message>
      <source>&amp;Facing Pages</source>
      <translation>&amp;Vastakkaiset sivut</translation>
    </message>
    <message>
      <source>Left &amp;Page First</source>
      <translation>Vasen &amp;sivu ensin</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation>&amp;Vasen:</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation>O&amp;ikea:</translation>
    </message>
    <message>
      <source>&amp;Top:</source>
      <translation>&amp;Ylhäällä:</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation>&amp;Alhaalla:</translation>
    </message>
    <message>
      <source>&amp;Automatic Text Frames</source>
      <translation>A&amp;utomaattiset tekstikehykset</translation>
    </message>
    <message>
      <source>&amp;Gap:</source>
      <translation>&amp;Väli:</translation>
    </message>
    <message>
      <source>Colu&amp;mns:</source>
      <translation>Pal&amp;stoja:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>&amp;Inside:</source>
      <translation>Sis&amp;äpuoli:</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation>Suu&amp;nta:</translation>
    </message>
    <message>
      <source>F&amp;irst Page Number:</source>
      <translation>&amp;Ensimmäisen sivun numero:</translation>
    </message>
    <message>
      <source>&amp;Default Unit:</source>
      <translation>Ol&amp;etusyksikkö:</translation>
    </message>
    <message>
      <source>O&amp;utside:</source>
      <translation>&amp;Ulkopuoli:</translation>
    </message>
    <message>
      <source>Executive</source>
      <translation>Executive</translation>
    </message>
    <message>
      <source>Folio</source>
      <translation>Folio</translation>
    </message>
    <message>
      <source>Ledger</source>
      <translation>Ledger</translation>
    </message>
  </context>
  <context>
    <name>NewTm</name>
    <message>
      <source>Left Page</source>
      <translation>Vasen sivu</translation>
    </message>
    <message>
      <source>Right Page</source>
      <translation>Oikea sivu</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>NodePalette</name>
    <message>
      <source>Nodes</source>
      <translation>Solmut</translation>
    </message>
    <message>
      <source>When checked use Coordinates relative to the Page,
otherwise Coordinates are relative to the Object.</source>
      <translation>Kun valittuna, koordinaatit näytetään suhteessa sivuun,
muulloin suhteessa kohteeseen.</translation>
    </message>
    <message>
      <source>Reset this Control Point</source>
      <translation>Palauta tämä hallintapiste</translation>
    </message>
    <message>
      <source>Delete Nodes</source>
      <translation>Poista solmu</translation>
    </message>
    <message>
      <source>Add Nodes</source>
      <translation>Lisää solmu</translation>
    </message>
    <message>
      <source>Move Nodes</source>
      <translation>Siirrä solmuja</translation>
    </message>
    <message>
      <source>Move Control Points</source>
      <translation>Siirrä hallintapisteitä</translation>
    </message>
    <message>
      <source>Reset Control Points</source>
      <translation>Palauta hallintapisteet</translation>
    </message>
    <message>
      <source>&amp;Absolute Coordinates</source>
      <translation>&amp;Absoluuttiset koordinaatit</translation>
    </message>
    <message>
      <source>&amp;X-Pos:</source>
      <translation>&amp;X:</translation>
    </message>
    <message>
      <source>&amp;Y-Pos:</source>
      <translation>&amp;Y:</translation>
    </message>
    <message>
      <source>Edit &amp;Contour Line</source>
      <translation>Muokkaa &amp;reunusta</translation>
    </message>
    <message>
      <source>&amp;Reset Contour Line</source>
      <translation>&amp;Palauta reunus</translation>
    </message>
    <message>
      <source>&amp;End Editing</source>
      <translation>&amp;Lopeta muokkaus</translation>
    </message>
    <message>
      <source>Move Control Points Independently</source>
      <translation>Siirrä hallintapisteitä itsenäisesti</translation>
    </message>
    <message>
      <source>Move Control Points Symmetrical</source>
      <translation>Siirrä hallintapisteitä symmetrisesti</translation>
    </message>
    <message>
      <source>Open a Polygon or Cuts a Bezier Curve</source>
      <translation>Avaa monikulmio tai katkaise Bezier-viiva</translation>
    </message>
    <message>
      <source>Close this Bezier Curve</source>
      <translation>Sulje tämä Bezier-viiva</translation>
    </message>
    <message>
      <source>Mirror the Path Horizontally</source>
      <translation>Peilaa polku pystysuunnassa</translation>
    </message>
    <message>
      <source>Mirror the Path Vertically</source>
      <translation>Peilaa polku vaakasuunnassa</translation>
    </message>
    <message>
      <source>Shear the Path Horizontally to the Left</source>
      <translation>Taivuta polkua vasemmalle</translation>
    </message>
    <message>
      <source>Shear the Path Vertically Up</source>
      <translation>Taivuta polkua ylöspäin</translation>
    </message>
    <message>
      <source>Shear the Path Vertically Down</source>
      <translation>Taivuta polkua alaspäin</translation>
    </message>
    <message>
      <source>Rotate the Path Counter-Clockwise</source>
      <translation>Kierrä polkua vastapäivään</translation>
    </message>
    <message>
      <source>Rotate the Path Clockwise</source>
      <translation>Kierrä polkua myötäpäivään</translation>
    </message>
    <message>
      <source>Reduce the Size of the Path by shown %</source>
      <translation>Pienennä polun kokoa</translation>
    </message>
    <message>
      <source>Enlarge the Size of the Path by shown %</source>
      <translation>Suurenna polun kokoa</translation>
    </message>
    <message>
      <source>Angle of Rotation</source>
      <translation>Kierron kulma</translation>
    </message>
    <message>
      <source>% to Enlarge or Reduce By</source>
      <translation>Pienennyksen ja suurennoksen suuruus</translation>
    </message>
    <message>
      <source>Activate Contour Line Editing Mode</source>
      <translation>Muokkaa tekstin kierron reunusta</translation>
    </message>
    <message>
      <source>Reset the Contour Line to the Original Shape of the Frame</source>
      <translation>Palauta tekstin kierron reunus alkuperäiseen muotoonsa</translation>
    </message>
    <message>
      <source>Shear the Path Horizontally to the Right</source>
      <translation>Taivuta polkua oikealle</translation>
    </message>
  </context>
  <context>
    <name>OdtDialog</name>
    <message>
      <source>Use document name as a prefix for paragraph styles</source>
      <translation>Käytä asiakirjan nimeä kappaletyylin edessä</translation>
    </message>
    <message>
      <source>Do not ask again</source>
      <translation>Älä kysy uudestaan</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>OpenDocument Importer Options</source>
      <translation>OpenDocument-tuojan asetukset</translation>
    </message>
    <message>
      <source>Update paragraph Styles</source>
      <translation>Päivitä kappaletyylit</translation>
    </message>
    <message>
      <source>Enabling this will overwrite existing styles in the current Scribus document</source>
      <translation>Ylikirjoita olemassa olevat kappaletyylit</translation>
    </message>
    <message>
      <source>Merge Paragraph Styles</source>
      <translation>Yhdistä kappaletyylit</translation>
    </message>
    <message>
      <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document's styles are named differently.</source>
      <translation>Yhdistää kappaletyylit tyylien asetusten perusteella. Tuloksena on vähemmän kappaletyylejä.</translation>
    </message>
    <message>
      <source>Prepend the document name to the paragraph style name in Scribus.</source>
      <translation>Käytä tuotavan asiakirjan nimeä kappaletyylin nimessä.</translation>
    </message>
    <message>
      <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
      <translation>Aseta tämänhetkiset valinnat oletusarvoiksi äläkä kysy asetuksia uudestaan tuotaessa OASIS OpenDocument-tiedostosta.</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
  </context>
  <context>
    <name>PConsole</name>
    <message>
      <source>Script Console</source>
      <translation>Skriptin konsoli</translation>
    </message>
  </context>
  <context>
    <name>PDF_Opts</name>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>Box</source>
      <translation>Laatikko</translation>
    </message>
    <message>
      <source> dpi</source>
      <translation> dpi</translation>
    </message>
    <message>
      <source> sec</source>
      <translation> sek</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>Sivu</translation>
    </message>
    <message>
      <source>Wipe</source>
      <translation>Pyyhi</translation>
    </message>
    <message>
      <source>Images:</source>
      <translation>Kuvat:</translation>
    </message>
    <message>
      <source>Split</source>
      <translation>Jaa</translation>
    </message>
    <message>
      <source>Dissolve</source>
      <translation>Häivytä</translation>
    </message>
    <message>
      <source>Horizontal</source>
      <translation>Vaakasuora</translation>
    </message>
    <message>
      <source>Absolute Colorimetric</source>
      <translation>Absolute Colorimetric</translation>
    </message>
    <message>
      <source>Export Range</source>
      <translation>Tallennettavat sivut</translation>
    </message>
    <message>
      <source>File Options</source>
      <translation>Tiedoston ominaisuudet</translation>
    </message>
    <message>
      <source>Right Margin</source>
      <translation>Oikea reunus</translation>
    </message>
    <message>
      <source>Fonts to embed:</source>
      <translation>Upotettavat kirjaintyypit:</translation>
    </message>
    <message>
      <source>Left to Right</source>
      <translation>Vasemmalta oikealle</translation>
    </message>
    <message>
      <source>Right to Left</source>
      <translation>Oikealta vasemmalle</translation>
    </message>
    <message>
      <source>Solid Colors:</source>
      <translation>Tasaiset värit:</translation>
    </message>
    <message>
      <source>Rendering-Intent:</source>
      <translation>Sovitustapa:</translation>
    </message>
    <message>
      <source>Blinds</source>
      <translation>Kaihtimet</translation>
    </message>
    <message>
      <source>No Effect</source>
      <translation>Ei efektiä</translation>
    </message>
    <message>
      <source>Don't use embedded ICC profiles</source>
      <translation>Älä käytä upotettuja ICC-profiileja</translation>
    </message>
    <message>
      <source>Available Fonts:</source>
      <translation>Käytetyt kirjaintyypit:</translation>
    </message>
    <message>
      <source>Inside</source>
      <translation>Sisäpuoli</translation>
    </message>
    <message>
      <source>Left Margin</source>
      <translation>Vasen reunus</translation>
    </message>
    <message>
      <source>Outside</source>
      <translation>Ulkopuoli</translation>
    </message>
    <message>
      <source>Printer</source>
      <translation>Tulostimelle</translation>
    </message>
    <message>
      <source>Embedding</source>
      <translation>Upottaminen</translation>
    </message>
    <message>
      <source>Trim Box</source>
      <translation>Trim Box</translation>
    </message>
    <message>
      <source>Profile:</source>
      <translation>Profiili:</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>Tallenna nimellä</translation>
    </message>
    <message>
      <source>Perceptual</source>
      <translation>Perceptual</translation>
    </message>
    <message>
      <source>Relative Colorimetric</source>
      <translation>Relative Colorimetric</translation>
    </message>
    <message>
      <source>Passwords</source>
      <translation>Salasanat</translation>
    </message>
    <message>
      <source>PDF/X-3 Output Intent</source>
      <translation>PDF/X-3 tuloste</translation>
    </message>
    <message>
      <source>Effects</source>
      <translation>Efektit</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation>saturaatio</translation>
    </message>
    <message>
      <source>Vertical</source>
      <translation>Pystysuora</translation>
    </message>
    <message>
      <source>Settings</source>
      <translation>Asetukset</translation>
    </message>
    <message>
      <source>General</source>
      <translation>Yleiset</translation>
    </message>
    <message>
      <source>Glitter</source>
      <translation>Kimallus</translation>
    </message>
    <message>
      <source>Bottom to Top</source>
      <translation>Alhaalta ylös</translation>
    </message>
    <message>
      <source>Top to Bottom</source>
      <translation>Ylhäältä alas</translation>
    </message>
    <message>
      <source>Screen / Web</source>
      <translation>Näytölle/Verkkoon</translation>
    </message>
    <message>
      <source>Top-left to Bottom-Right</source>
      <translation>Ylävasemmalta alaoikealle</translation>
    </message>
    <message>
      <source>Automatic</source>
      <translation>Automaattinen</translation>
    </message>
    <message>
      <source>None</source>
      <translation>Ei mitään</translation>
    </message>
    <message>
      <source>Maximum</source>
      <translation>Paras</translation>
    </message>
    <message>
      <source>High</source>
      <translation>Korkea</translation>
    </message>
    <message>
      <source>Medium</source>
      <translation>Keskitaso</translation>
    </message>
    <message>
      <source>Low</source>
      <translation>Matala</translation>
    </message>
    <message>
      <source>Minimum</source>
      <translation>Heikoin</translation>
    </message>
    <message>
      <source>Export all pages to PDF</source>
      <translation>Vie kaikki sivut PDF:ään</translation>
    </message>
    <message>
      <source>Export a range of pages to PDF</source>
      <translation>Vie valittu väli sivuja PDF:ään</translation>
    </message>
    <message>
      <source>Length of time the page is shown before the presentation starts on the selected page.</source>
      <translation>Aika, joka odotetaan ennen esityksen alkua valitulla sivulla.</translation>
    </message>
    <message>
      <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
      <translation>Efektin kesto. Lyhyt aika nopeuttaa efektiä, pitkä hidastaa sitä.</translation>
    </message>
    <message>
      <source>Apply the selected effect to all pages.</source>
      <translation>Käytä valittua esitysefektiä kaikkiin sivuihin.</translation>
    </message>
    <message>
      <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
      <translation>Valitse salasana, joka sallii tai estää kaikki 
turvallisuusominaisuudet tehdyssä PDF:ssa</translation>
    </message>
    <message>
      <source>Embed a color profile for solid colors</source>
      <translation>Upota väriprofiili tasaisille väreille</translation>
    </message>
    <message>
      <source>Embed a color profile for images</source>
      <translation>Upota väriprofiili kuville</translation>
    </message>
    <message>
      <source>Do not use color profiles that are embedded in source images</source>
      <translation>Älä käytä väriprofiileja jotka on upotettu kuviin</translation>
    </message>
    <message>
      <source>Distance for bleed from the top of the physical page</source>
      <translation>Etäisyys bleed:lle sivun todellisesta yläreunasta</translation>
    </message>
    <message>
      <source>Distance for bleed from the bottom of the physical page</source>
      <translation>Etäisyys bleed:lle sivun todellista alareunasta</translation>
    </message>
    <message>
      <source>Distance for bleed from the left of the physical page</source>
      <translation>Etäisyys bleed:lle sivun todellisesta vasemmasta reunasta</translation>
    </message>
    <message>
      <source>Distance for bleed from the right of the physical page</source>
      <translation>Etäisyys bleed:lle sivun todellisesta oikeasta reunasta</translation>
    </message>
    <message>
      <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
      <translation>Määrittää sivujen sidonnan PDF:ään.
Jos et ole varma, jätä oletusarvo - vasen.</translation>
    </message>
    <message>
      <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
      <translation>Tekee PDF-artikkeleita, jotka ovat hyödyllisiä navigoidessa linkitettyjen artikkelien välillä PDF:ssä.</translation>
    </message>
    <message>
      <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
      <translation>Sisällytä asiakirjaan luomasi kirjanmerkit.
Ne helpottavat navigointia pitkässä PDF-dokumentissa.</translation>
    </message>
    <message>
      <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
      <translation>Vietävän tekstin ja vektorigrafiikan resoluutio.
Tämä ei vaikuta bitmap-kuvien kuten valokuvien resoluutioon.</translation>
    </message>
    <message>
      <source>DPI (Dots Per Inch) for image export.</source>
      <translation>DPI (pistettä tuumalle) kuvien vientiä varten.</translation>
    </message>
    <message>
      <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
      <translation>Upota kirjaintyypit PDF:ään. Kirjaintyyppien 
upotus säilyttää asiakirjasi ulkonäön.</translation>
    </message>
    <message>
      <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
      <translation>Mahdollistaa esitysefektit kun käytössä on Acrobat Reader koko ruudun tilassa.</translation>
    </message>
    <message>
      <source>Show page previews of each page listed above.</source>
      <translation>Näytä sivujen esikatselu sivuista jotka on listattu yllä.</translation>
    </message>
    <message>
      <source>Type of the display effect.</source>
      <translation>Näytettävän efektin tyyppi.</translation>
    </message>
    <message>
      <source>Direction of the effect of moving lines for the split and blind effects.</source>
      <translation>Liikkuvien viivojen suunta jako- ja kaihdinefekteille.</translation>
    </message>
    <message>
      <source>Starting position for the box and split effects.</source>
      <translation>Alkupiste laatikko- ja jakoefekteille.</translation>
    </message>
    <message>
      <source>Direction of the glitter or wipe effects.</source>
      <translation>Suunta kimallus- ja pyyhkimisefekteille.</translation>
    </message>
    <message>
      <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
      <translation>Mahdollista turvallisuusominaisuudet PDF:ssä.
Jos valitset Acrobat 4.0, PDF on suojattu 40 bittisellä salauksella.
Jos valitset Acrobat 5.0, PDF on suojattu 128 bittisellä salauksella.
Varoitus: PDF-salaus ei ole yhtä luotettava kuin GPG tai PGP ja siinä on joitain rajoituksia.</translation>
    </message>
    <message>
      <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
      <translation>Värimalli tehtävälle PDF:lle.
Valitse Näytölle/Verkkoon PDF:lle, joka on tarkoitettu näytölle tai tulostettavaksi tyypillisellä mustesuihkutulostimella.
Valitse Tulostimelle, kun tulostetaan todellisella CMYK-neliväritulostimella.</translation>
    </message>
    <message>
      <source>Color profile for solid colors</source>
      <translation>Väriprofiili tasaisille väreille</translation>
    </message>
    <message>
      <source>Rendering intent for solid colors</source>
      <translation>Sovitustapa tasaisille väreille</translation>
    </message>
    <message>
      <source>Color profile for images</source>
      <translation>Väriprofiili kuville</translation>
    </message>
    <message>
      <source>Rendering intent for images</source>
      <translation>Sovitustapa kuville</translation>
    </message>
    <message>
      <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
      <translation>Profiili tulosteelle. Jos mahdollista pyydä ohjeita painolta profiilin valinnassa.</translation>
    </message>
    <message>
      <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
      <translation>Pakollinen teksti PDF/X-3:lle. Ilman tätä PDF ei ole validi.
Suosittelemme käyttämään asiakirjan otsikkoa/nimeä.</translation>
    </message>
    <message>
      <source>&amp;General</source>
      <translation>&amp;Yleiset</translation>
    </message>
    <message>
      <source>&amp;Fonts</source>
      <translation>K&amp;irjaintyypit</translation>
    </message>
    <message>
      <source>Choose a password for users to be able to read your PDF.</source>
      <translation>Valitse salasana käyttäjille PDF-dokumentin lukua varten.</translation>
    </message>
    <message>
      <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
      <translation>Salli PDF-dokumentin tulostaminen. Jos kohta ei ole valittuna tulostaminen on estetty.</translation>
    </message>
    <message>
      <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
      <translation>Salli PDF-dokumentin muokkaus. Jos ei ole valittuna, muokkaus on estetty.</translation>
    </message>
    <message>
      <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
      <translation>Salli tekstin ja grafiikan kopiointi PDF-dokumentista.
Jos kohta ei ole valittuna, kopiointi on estetty.</translation>
    </message>
    <message>
      <source>Rendering Settings</source>
      <translation>Sovitusasetukset</translation>
    </message>
    <message>
      <source>Simple Dot</source>
      <translation>Yksinkertainen piste</translation>
    </message>
    <message>
      <source>Line</source>
      <translation>Viiva</translation>
    </message>
    <message>
      <source>Round</source>
      <translation>Ympyrä</translation>
    </message>
    <message>
      <source>Ellipse</source>
      <translation>Ellipsi</translation>
    </message>
    <message>
      <source>O&amp;utput to File:</source>
      <translation>&amp;Tulosta tiedostoon:</translation>
    </message>
    <message>
      <source>Cha&amp;nge...</source>
      <translation>&amp;Muuta...</translation>
    </message>
    <message>
      <source>&amp;All Pages</source>
      <translation>&amp;Kaikki sivut</translation>
    </message>
    <message>
      <source>C&amp;hoose Pages</source>
      <translation>&amp;Valitse sivut</translation>
    </message>
    <message>
      <source>Compatibilit&amp;y:</source>
      <translation>&amp;Yhteensopivuus:</translation>
    </message>
    <message>
      <source>&amp;Binding:</source>
      <translation>&amp;Sidonta:</translation>
    </message>
    <message>
      <source>Generate &amp;Thumbnails</source>
      <translation>Luo &amp;esikatselukuvat</translation>
    </message>
    <message>
      <source>Save &amp;Linked Text Frames as PDF Articles</source>
      <translation>Tallenna &amp;linkitetyt tekstikehykset PDF-artikkeleina</translation>
    </message>
    <message>
      <source>&amp;Include Bookmarks</source>
      <translation>Sisällytä &amp;kirjanmerkit</translation>
    </message>
    <message>
      <source>&amp;Resolution:</source>
      <translation>&amp;Tarkkuus:</translation>
    </message>
    <message>
      <source>&amp;Method:</source>
      <translation>&amp;Menetelmä:</translation>
    </message>
    <message>
      <source>&amp;Quality:</source>
      <translation>&amp;Laatu:</translation>
    </message>
    <message>
      <source>&amp;Downsample Images to:</source>
      <translation>&amp;Heikennä kuvat:</translation>
    </message>
    <message>
      <source>&amp;Embed all Fonts</source>
      <translation>&amp;Upota kaikki kirjaintyypit</translation>
    </message>
    <message>
      <source>&amp;>></source>
      <translation>&amp;>></translation>
    </message>
    <message>
      <source>&amp;&lt;&lt;</source>
      <translation>&amp;&lt;&lt;</translation>
    </message>
    <message>
      <source>Show Page Pre&amp;views</source>
      <translation>Näytä &amp;esikatselu sivuista</translation>
    </message>
    <message>
      <source>&amp;Display Duration:</source>
      <translation>&amp;Näytön kesto:</translation>
    </message>
    <message>
      <source>Effec&amp;t Duration:</source>
      <translation>&amp;Efektin kesto:</translation>
    </message>
    <message>
      <source>Effect T&amp;ype:</source>
      <translation>Efektin &amp;tyyppi:</translation>
    </message>
    <message>
      <source>&amp;Moving Lines:</source>
      <translation>&amp;Suunta:</translation>
    </message>
    <message>
      <source>F&amp;rom the:</source>
      <translation>&amp;Alkaen:</translation>
    </message>
    <message>
      <source>D&amp;irection:</source>
      <translation>&amp;Suunta:</translation>
    </message>
    <message>
      <source>&amp;Apply Effect on all Pages</source>
      <translation>Kä&amp;ytä efektiä kaikkiin sivuihin</translation>
    </message>
    <message>
      <source>&amp;Use Encryption</source>
      <translation>&amp;Käytä salausta</translation>
    </message>
    <message>
      <source>&amp;User:</source>
      <translation>K&amp;äyttäjä:</translation>
    </message>
    <message>
      <source>&amp;Owner:</source>
      <translation>&amp;Omistaja:</translation>
    </message>
    <message>
      <source>Allow &amp;Printing the Document</source>
      <translation>Salli asiakirjan &amp;tulostus</translation>
    </message>
    <message>
      <source>Allow &amp;Changing the Document</source>
      <translation>Salli &amp;asiakirjan muokkaus</translation>
    </message>
    <message>
      <source>Allow Cop&amp;ying Text and Graphics</source>
      <translation>Salli tekstin ja kuvien &amp;kopiointi</translation>
    </message>
    <message>
      <source>Allow Adding &amp;Annotations and Fields</source>
      <translation>Salli &amp;kenttien lisääminen</translation>
    </message>
    <message>
      <source>S&amp;ecurity</source>
      <translation>&amp;Turvallisuus</translation>
    </message>
    <message>
      <source>Output &amp;Intended For:</source>
      <translation>&amp;Tuloste on tarkoitettu:</translation>
    </message>
    <message>
      <source>&amp;Use Custom Rendering Settings</source>
      <translation>Käytä &amp;omia sovitusasetuksia</translation>
    </message>
    <message>
      <source>Fre&amp;quency:</source>
      <translation>&amp;Taajuus:</translation>
    </message>
    <message>
      <source>&amp;Angle:</source>
      <translation>K&amp;ulma:</translation>
    </message>
    <message>
      <source>S&amp;pot Function:</source>
      <translation>&amp;Spot-funktio:</translation>
    </message>
    <message>
      <source>Use ICC Profile</source>
      <translation>Käytä ICC-profiilia</translation>
    </message>
    <message>
      <source>C&amp;olor</source>
      <translation>&amp;Väri</translation>
    </message>
    <message>
      <source>&amp;Info String:</source>
      <translation>&amp;Infoteksti:</translation>
    </message>
    <message>
      <source>Output &amp;Profile:</source>
      <translation>&amp;Vientiprofiili:</translation>
    </message>
    <message>
      <source>PDF/X-&amp;3</source>
      <translation>PDF/X-&amp;3</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>&amp;Tallenna</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>PDF Files (*.pdf);;All Files (*)</source>
      <translation>PDF-tiedostot (*.pdf);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
      <translation>Tämä asetus ei ole käytössä oletuksena. Sitä tulisi käyttää ainoastaan kun käyttämäsi paino
vaatii sitä ja on antanut ohjeet ja tarkat arvot asetuksille. Muussa tapauksessa tallentamasi
PDF-tiedosto ei välttämättä tulostu oikein eikä ole siirrettävissä muille alustoille.</translation>
    </message>
    <message>
      <source>Compress Text and &amp;Vector Graphics</source>
      <translation>Pakkaa teksti ja &amp;vektorigrafiikka</translation>
    </message>
    <message>
      <source>En&amp;able Presentation Effects</source>
      <translation>Käytä &amp;esitysefektejä</translation>
    </message>
    <message>
      <source>&amp;Presentation</source>
      <translation>&amp;Esitys</translation>
    </message>
    <message>
      <source>&amp;Rotation:</source>
      <translation>Ki&amp;erto:</translation>
    </message>
    <message>
      <source>&amp;Subset all Fonts</source>
      <translation>Tee osa&amp;joukko kirjaintyypeistä</translation>
    </message>
    <message>
      <source>Fonts to subset:</source>
      <translation>Kirjaintyypit osajoukoiksi:</translation>
    </message>
    <message>
      <source>Mirror Page(s) horizontally</source>
      <translation>Peilaa sivu(t) vaakasuorasti</translation>
    </message>
    <message>
      <source>Mirror Page(s) vertically</source>
      <translation>Peilaa sivu(t) pystysuorasti</translation>
    </message>
    <message>
      <source>&lt;qt>Color management must be enabled to use PDF/X-3. You can enable color management from the Settings menu.&lt;/qt></source>
      <translation>&lt;qt>Värienhallinta täytyy olla käytössä, jotta PDF/X-3:a voidaan käyttää. Värienhallinta voidaan käynnistää &quot;Asetukset&quot;-valikosta.&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;qt>PDF/X-3 is supported and enabled, but can not be used for the selected PDF version. If you want to use PDF/X-3, you need to set PDF/X-3 as your PDF version (compatibility level).&lt;/qt></source>
      <translation>&lt;qt>PDF/X-3 on tuettu ja käytössä, mutta sitä ei voida käyttää valitulle PDF-versiolle. Jos haluat käyttää PDF/X-3:a, täytyy PDF-versioksi asettaa PDF/X-3.&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;qt>PDF/X-3 is not supported by this Scribus build (CMS support not present).&lt;/qt></source>
      <translation>&lt;qt>Tämä Scribuksen käännös ei tue PDF/X-3-tiedostomuotoa (värienhallinnan tukea ei löydy).&lt;/qt> </translation>
    </message>
    <message>
      <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fields is prevented.</source>
      <translation>Salli kenttien ja huomautusten lisääminen PDF-tiedostoon.
Jos kohtaa ei valita, kenttien ja huomautusten muokkaus on estetty.</translation>
    </message>
    <message>
      <source>PDF security settings</source>
      <translation>PDF turvallisuusasetukset</translation>
    </message>
    <message>
      <source>PDF/X-3 settings</source>
      <translation>PDF/X-3 asetukset</translation>
    </message>
    <message>
      <source>&lt;qt>PDF security can not be used with PDF/X-3. If you want to turn on security, change your PDF version (compatibility level) to something other than PDF/X-3.&lt;/qt></source>
      <translation>&lt;qt>PDF-tiedoston turvallisuusominaisuuksia ei voi käyttää PDF/X-3:n kanssa. Jos haluat käyttää niitä, PDF-versio täytyy vaihtaa muuksi kuin PDF/X-3:ksi.&lt;/qt></translation>
    </message>
    <message>
      <source>Save as PDF</source>
      <translation>Tallenna PDF-tiedostoon</translation>
    </message>
    <message>
      <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility. Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption. PDF/X-3 is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Note: PDF/X-3 will convert all CMYK images to ICC based RGB colors. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
      <translation>Määrittelee PDF-yhteensopivuuden. Oletusarvo on Acrobat 4.0, joka antaa laajimman yhteensopivuuden. Valitse Acrobat 5.0, jos tiedostossasi on PDF 1.4:n ominaisuuksia kuten läpinäkyvyyttä tai tarvitset 128 bittistä salausta. PDF/X-3 mahdollistaa RGB-värienhallinnan sisällyttämisen PDF-tiedostoon. Se on valittavana, jos värienhallinta on käytössä. PDF/X-3 muuttaa kaikki CMYK-kuvat ICC-pohjaisiin RGB-väreihin. PDF/X-3:a tulee käyttää ainoastaan, jos paino on sitä pyytänyt tai joissain tapauksissa, kun tulostetaan nelivärilasertulostimilla.</translation>
    </message>
    <message>
      <source> Lossless compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
      <translation>Häviötön pakkaus tekstille ja grafiikalle.
Ota pois käytöstä ainoastaan, jos tiedät mitä teet. Valittuna pienentää PDF-tiedoston kokoa.</translation>
    </message>
    <message>
      <source>Image Compression Methods</source>
      <translation>Kuvien pakkausmenetelmät</translation>
    </message>
    <message>
      <source>JPEG - Lossy</source>
      <translation>JPEG - häviöllinen</translation>
    </message>
    <message>
      <source>Zip - Lossless</source>
      <translation>Zip - häviötön</translation>
    </message>
    <message>
      <source>Insert a comma separated list of tokens where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
      <translation>Syötä pilkuin eroteltu lista sivuista. Pelkän sivunumeron lisäksi voit käyttää merkkiä * kuvaamaan kaikkia sivuja tai 1-5 sivuväliä.</translation>
    </message>
    <message>
      <source>Generates thumbnails of each page in the PDF. Some viewers can use the thumbnails for navigation.</source>
      <translation>Tekee esikatselukuvat kaikista PDF-dokumentin sivuista. Jotkin katseluohjelmat käyttävät näitä navigointiin.</translation>
    </message>
    <message>
      <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic, unless you have a need for special compression options. This only applies to JPEG images</source>
      <translation>Kuvien pakkausmenetelmistä automaattinen antaa Scribuksen valita parhaimman mahdollisen, Zip on häviötön ja hyvä kuville, joissa on runsaasti tasaisia väripintoja, JPEG auttaa luomaan pienempiä PDF-tiedostoja, jos dokumentissa on useita kuvia (JPEG on häviöllinen eli kuvien laatu saattaa heiketä). Valitse automaattinen, ellet halua erityisesti käyttää jotain tiettyä pakkausmentelmää. Tämä valinta vaikuttaa ainoastaan JPEG-kuviin.</translation>
    </message>
    <message>
      <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%) - This only affects JPEG images.</source>
      <translation>Pakkaustasot: Heikoin (25 %), Matala (50 %), Keskitaso (75 %), Korkea (85 %), Paras (95 %). Pakkaustaso on käytössä ainoastaan JPEG-kuvilla.</translation>
    </message>
    <message>
      <source>Re-sample your bitmap images to the selected DPI. Leaving this unchecked will render them at their native resolution. This can increase memory usage and slow down export.</source>
      <translation>Muuta kuvien resoluutio haluttuun DPI-arvoon. Jos tämä ei ole valittuna, kuvat lisätään niiden sen hetkisillä resoluutioilla. Asetus saattaa lisätä muistin käyttöä ja hidastaa PDF-vientiä.</translation>
    </message>
  </context>
  <context>
    <name>PPreview</name>
    <message>
      <source>All</source>
      <translation>Kaikki</translation>
    </message>
    <message>
      <source>Print Preview</source>
      <translation>Tulostuksen esikatselu</translation>
    </message>
    <message>
      <source>Provides a more pleasant view of text items in the viewer, at the expense
of a slight slowdown in previewing. This only affects Type 1 fonts</source>
      <translation>Mahdollistaa miellyttävämmän ulkonäön tekstille, mutta esikatselu saattaa hidastua hieman.
Vaikuttaa ainoastaan Type 1 kirjaintyyppeihin</translation>
    </message>
    <message>
      <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
      <translation>Mahdollistaa asiakirjan läpinäkyvyyden näyttämisen. Vaatii Ghostscript 7.07:n tai uudemman version</translation>
    </message>
    <message>
      <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
      <translation>Esikatselu jäljittelee CMYK musteita RGB-värien sijaan</translation>
    </message>
    <message>
      <source>Enable/disable the C (Cyan) ink plate</source>
      <translation>Näytä/Älä näytä C (syaani) muste</translation>
    </message>
    <message>
      <source>Enable/disable the M (Magenta) ink plate</source>
      <translation>Näytä/Älä näytä M (magenta) muste</translation>
    </message>
    <message>
      <source>Enable/disable the Y (Yellow) ink plate</source>
      <translation>Näytä/Älä näytä Y (keltainen) muste</translation>
    </message>
    <message>
      <source>Enable/disable the K (Black) ink plate</source>
      <translation>Näytä/Älä näytä K (musta) muste</translation>
    </message>
    <message>
      <source>Anti-alias &amp;Text</source>
      <translation>&amp;Antialiosi teksti</translation>
    </message>
    <message>
      <source>Anti-alias &amp;Graphics</source>
      <translation>Antialisoi &amp;grafiikka</translation>
    </message>
    <message>
      <source>Display Trans&amp;parency</source>
      <translation>Näytä &amp;läpinäkyvyys</translation>
    </message>
    <message>
      <source>&amp;Display CMYK</source>
      <translation>Näytä &amp;CMYK</translation>
    </message>
    <message>
      <source>&amp;C</source>
      <translation>&amp;C</translation>
    </message>
    <message>
      <source>&amp;M</source>
      <translation>&amp;M</translation>
    </message>
    <message>
      <source>&amp;Y</source>
      <translation>&amp;Y</translation>
    </message>
    <message>
      <source>&amp;K</source>
      <translation>&amp;K</translation>
    </message>
    <message>
      <source>&amp;Under Color Removal</source>
      <translation>&amp;Alivärin poisto (UCR)</translation>
    </message>
    <message>
      <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
      <translation>Tapa vaihtaa C, Y ja M värien tekemä harmaa mustalla tehdyksi.
UCR vaikuttaa kuvien kohdissa, jotka ovat neutraaleja tai lähellä harmaata
olevia tummia värejä. UCR:n käyttäminen saattaa parantaa joidenkin kuvien
tulostamista. Parhaan tuloksen saavuttamiseksi tarvitaan tapauskohtaista
testausta. UCR parantaa kykyä välttää värien liikaa kylläisyyttä CMY-musteilla.</translation>
    </message>
    <message>
      <source>Provides a more pleasant view of TrueType Fonts, OpenType Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
      <translation>Mahdollistaa paremman ulkonäön TrueType- ja OpenType-kirjaintyypeille, EPS:lle, PDF:lle ja 
vektorigrafiikalle esikatselussa esikatselun nopeuden kustannuksella</translation>
    </message>
  </context>
  <context>
    <name>Page</name>
    <message>
      <source>None</source>
      <translation>Ei mitään</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
    <message>
      <source>File: </source>
      <translation>Tiedosto: </translation>
    </message>
    <message>
      <source>Text Frame</source>
      <translation>Tekstikehys</translation>
    </message>
    <message>
      <source>Picture</source>
      <translation>Kuva</translation>
    </message>
    <message>
      <source>Copy Here</source>
      <translation>Kopioi tähän</translation>
    </message>
    <message>
      <source>Chars: </source>
      <translation>Merkit: </translation>
    </message>
    <message>
      <source>Text on a Path</source>
      <translation>Teksti polulla</translation>
    </message>
    <message>
      <source>Move Here</source>
      <translation>Siirrä tähän</translation>
    </message>
    <message>
      <source>Paragraphs: </source>
      <translation>Kappaleet:</translation>
    </message>
    <message>
      <source>Words: </source>
      <translation>Sanat: </translation>
    </message>
    <message>
      <source>Edit Text...</source>
      <translation>Muokkaa tekstiä...</translation>
    </message>
    <message>
      <source>Linked Text</source>
      <translation>Linkitetty teksti</translation>
    </message>
    <message>
      <source>Print: </source>
      <translation>Tulosta:</translation>
    </message>
    <message>
      <source>Enabled</source>
      <translation>Kyllä</translation>
    </message>
    <message>
      <source>Disabled</source>
      <translation>Ei</translation>
    </message>
    <message>
      <source>The Program</source>
      <translation>Ohjelma</translation>
    </message>
    <message>
      <source>is missing!</source>
      <translation>puuttuu!</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>L&amp;iitä</translation>
    </message>
    <message>
      <source>Show &amp;Margins</source>
      <translation>Näytä &amp;reunukset</translation>
    </message>
    <message>
      <source>Show &amp;Frames</source>
      <translation>Näytä &amp;kehykset</translation>
    </message>
    <message>
      <source>Show &amp;Images</source>
      <translation>Näytä &amp;kuvat</translation>
    </message>
    <message>
      <source>Show &amp;Grid</source>
      <translation>Näytä ruu&amp;dukko</translation>
    </message>
    <message>
      <source>Show G&amp;uides</source>
      <translation>Näytä &amp;apuviivat</translation>
    </message>
    <message>
      <source>Show &amp;Baseline Grid</source>
      <translation>Näytä p&amp;eruslinja</translation>
    </message>
    <message>
      <source>Sn&amp;ap to Grid</source>
      <translation>Kiinnitä r&amp;uudukkoon</translation>
    </message>
    <message>
      <source>Sna&amp;p to Guides</source>
      <translation>Kiinnitä a&amp;puviivoihin</translation>
    </message>
    <message>
      <source>Original PPI: </source>
      <translation>Alkuperäinen PPI:</translation>
    </message>
    <message>
      <source>Actual PPI: </source>
      <translation>Todellinen PPI:</translation>
    </message>
    <message>
      <source>In&amp;fo</source>
      <translation>Tie&amp;dot</translation>
    </message>
    <message>
      <source>&amp;Get Picture...</source>
      <translation>&amp;Hae kuva...</translation>
    </message>
    <message>
      <source>I&amp;mage Visible</source>
      <translation>Kuva &amp;näkyvissä</translation>
    </message>
    <message>
      <source>&amp;Update Picture</source>
      <translation>&amp;Päivitä kuva</translation>
    </message>
    <message>
      <source>&amp;Edit Picture</source>
      <translation>&amp;Muokkaa kuvaa</translation>
    </message>
    <message>
      <source>&amp;Adjust Frame to Picture</source>
      <translation>&amp;Sovita kehys kuvaan</translation>
    </message>
    <message>
      <source>&amp;Get Text...</source>
      <translation>&amp;Hae teksti...</translation>
    </message>
    <message>
      <source>&amp;Append Text...</source>
      <translation>&amp;Jatka tekstiä...</translation>
    </message>
    <message>
      <source>&amp;Edit Text...</source>
      <translation>&amp;Muokkaa tekstiä...</translation>
    </message>
    <message>
      <source>&amp;Insert Sample Text</source>
      <translation>&amp;Lisää esimerkkiteksti</translation>
    </message>
    <message>
      <source>Is PDF &amp;Bookmark</source>
      <translation>&amp;On PDF-kirjanmerkki</translation>
    </message>
    <message>
      <source>Is PDF A&amp;nnotation</source>
      <translation>On PDF-&amp;merkintä</translation>
    </message>
    <message>
      <source>Annotation P&amp;roperties</source>
      <translation>Merkinnän &amp;ominaisuudet</translation>
    </message>
    <message>
      <source>Field P&amp;roperties</source>
      <translation>&amp;Kentän ominaisuudet</translation>
    </message>
    <message>
      <source>&amp;PDF Options</source>
      <translation>&amp;PDF-asetukset</translation>
    </message>
    <message>
      <source>&amp;Lock</source>
      <translation>&amp;Lukitse</translation>
    </message>
    <message>
      <source>Un&amp;lock</source>
      <translation>&amp;Vapauta</translation>
    </message>
    <message>
      <source>Lock Object &amp;Size</source>
      <translation>Lukitse &amp;kohteen koko</translation>
    </message>
    <message>
      <source>Unlock Object &amp;Size</source>
      <translation>Vapauta &amp;kohteen koko</translation>
    </message>
    <message>
      <source>Send to S&amp;crapbook</source>
      <translation>&amp;Vie leikekirjaan</translation>
    </message>
    <message>
      <source>Send to La&amp;yer</source>
      <translation>Vie &amp;tasoon</translation>
    </message>
    <message>
      <source>&amp;Group</source>
      <translation>&amp;Ryhmitä</translation>
    </message>
    <message>
      <source>Un&amp;group</source>
      <translation>&amp;Pura ryhmitys</translation>
    </message>
    <message>
      <source>Le&amp;vel</source>
      <translation>&amp;Kerros</translation>
    </message>
    <message>
      <source>Send to &amp;Back</source>
      <translation>Vie &amp;alimmaiseksi</translation>
    </message>
    <message>
      <source>Bring to &amp;Front</source>
      <translation>Tuo &amp;päällimmäiseksi</translation>
    </message>
    <message>
      <source>&amp;Lower</source>
      <translation>Vie a&amp;laspäin</translation>
    </message>
    <message>
      <source>&amp;Raise</source>
      <translation>&amp;Tuo ylöspäin</translation>
    </message>
    <message>
      <source>&amp;Picture Frame</source>
      <translation>&amp;Kuvakehys</translation>
    </message>
    <message>
      <source>Pol&amp;ygon</source>
      <translation>&amp;Monikulmio</translation>
    </message>
    <message>
      <source>&amp;Outlines</source>
      <translation>&amp;Ääriviivat</translation>
    </message>
    <message>
      <source>&amp;Text Frame</source>
      <translation>&amp;Tekstikehys</translation>
    </message>
    <message>
      <source>&amp;Bezier Curve</source>
      <translation>&amp;Bezier-viiva</translation>
    </message>
    <message>
      <source>Conve&amp;rt to</source>
      <translation>Tee &amp;kohteesta</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>&amp;Leikkaa</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>&amp;Kopioi</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>&amp;Poista</translation>
    </message>
    <message>
      <source>C&amp;lear Contents</source>
      <translation>&amp;Tyhjennä</translation>
    </message>
    <message>
      <source>Show P&amp;roperties...</source>
      <translation>&amp;Ominaisuudet...</translation>
    </message>
    <message>
      <source>Hide P&amp;roperties...</source>
      <translation>&amp;Piilota ominaisuudet...</translation>
    </message>
    <message>
      <source>Do you really want to clear all your Text?</source>
      <translation>Haluatko poistaa kaiken tekstin?</translation>
    </message>
  </context>
  <context>
    <name>PageItem</name>
    <message>
      <source>Image</source>
      <translation>Kuva</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>Teksti</translation>
    </message>
    <message>
      <source>Line</source>
      <translation>Viiva</translation>
    </message>
    <message>
      <source>Polygon</source>
      <translation>Monikulmio</translation>
    </message>
    <message>
      <source>Polyline</source>
      <translation>Kulmikas viiva</translation>
    </message>
    <message>
      <source>PathText</source>
      <translation>Teksti polulla</translation>
    </message>
  </context>
  <context>
    <name>PageSelector</name>
    <message>
      <source>Page </source>
      <translation>Sivu</translation>
    </message>
    <message>
      <source> of %1</source>
      <translation> / %1</translation>
    </message>
  </context>
  <context>
    <name>PicSearch</name>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
    <message>
      <source>Result</source>
      <translation>Tulos</translation>
    </message>
    <message>
      <source>Select</source>
      <translation>Valitse</translation>
    </message>
    <message>
      <source>Search Results for: </source>
      <translation>Etsi tuloksia: </translation>
    </message>
    <message>
      <source>Preview</source>
      <translation>Esikatselu</translation>
    </message>
  </context>
  <context>
    <name>PicStatus</name>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Yes</source>
      <translation>Kyllä</translation>
    </message>
    <message>
      <source>Goto</source>
      <translation>Mene</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nimi</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>Sivu</translation>
    </message>
    <message>
      <source>Path</source>
      <translation>Polku</translation>
    </message>
    <message>
      <source>Print</source>
      <translation>Tulosta</translation>
    </message>
    <message>
      <source>Missing</source>
      <translation>Puuttuu</translation>
    </message>
    <message>
      <source>Search</source>
      <translation>Etsi</translation>
    </message>
    <message>
      <source>Status</source>
      <translation>Tila</translation>
    </message>
    <message>
      <source>Pictures</source>
      <translation>Kuvat</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
  </context>
  <context>
    <name>PolygonProps</name>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Polygon Properties</source>
      <translation>Monikulmion ominaisuudet</translation>
    </message>
    <message>
      <source>Corn&amp;ers:</source>
      <translation>K&amp;ulmat:</translation>
    </message>
    <message>
      <source>&amp;Rotation:</source>
      <translation>Ki&amp;erto:</translation>
    </message>
    <message>
      <source>&amp;Factor:</source>
      <translation>&amp;Kerroin:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>Number of corners for polygons</source>
      <translation>Monikulmion kulmien lukumäärä</translation>
    </message>
    <message>
      <source>Degrees of rotation for polygons</source>
      <translation>Monikulmion kierron aste</translation>
    </message>
    <message>
      <source>Sample Polygon</source>
      <translation>Esimerkki monikulmiosta</translation>
    </message>
    <message>
      <source>Apply &amp;Factor</source>
      <translation>Käytä &amp;kerrointa</translation>
    </message>
    <message>
      <source>Apply Convex/Concave Factor to change shape of Polygons</source>
      <translation>Käytä kuperaa/koveraa kerrointa muuttaaksesi monikulmion muotoa</translation>
    </message>
    <message>
      <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
      <translation>Negatiivinen arvo tekee monikulmiosta koveran (tähden muotoisen),
positiivinen kuperan</translation>
    </message>
  </context>
  <context>
    <name>Preferences</name>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>GUI</source>
      <translation>Käyttöliittymä</translation>
    </message>
    <message>
      <source>min</source>
      <translation>min</translation>
    </message>
    <message>
      <source>None</source>
      <translation>Ei mikään</translation>
    </message>
    <message>
      <source>Menus</source>
      <translation>Valikot</translation>
    </message>
    <message>
      <source>Paths</source>
      <translation>Hakemistot</translation>
    </message>
    <message>
      <source>Other</source>
      <translation>Muut</translation>
    </message>
    <message>
      <source>Small</source>
      <translation>Pieni</translation>
    </message>
    <message>
      <source>Tools</source>
      <translation>Työkalut</translation>
    </message>
    <message>
      <source>Units</source>
      <translation>Yksiköt</translation>
    </message>
    <message>
      <source>Other Options</source>
      <translation>Muut asetukset</translation>
    </message>
    <message>
      <source>Small Caps</source>
      <translation>Kapiteelit</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>Oma</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>Vaakasuora</translation>
    </message>
    <message>
      <source>Guides</source>
      <translation>Apuviivat</translation>
    </message>
    <message>
      <source>Grid Colors</source>
      <translation>Ruudukon värit</translation>
    </message>
    <message>
      <source>Medium</source>
      <translation>Keskikoko</translation>
    </message>
    <message>
      <source>Grid Layout</source>
      <translation>Ruudukon asettelu</translation>
    </message>
    <message>
      <source>Document</source>
      <translation>Asiakirja</translation>
    </message>
    <message>
      <source>Typography</source>
      <translation>Typografia</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>Pystysuora</translation>
    </message>
    <message>
      <source>Placing</source>
      <translation>Sijoitus</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation>Sivun reunukset</translation>
    </message>
    <message>
      <source>Preview</source>
      <translation>Esikatselu</translation>
    </message>
    <message>
      <source>Woven silk pyjamas exchanged for blue quartz</source>
      <translation>Wowen silk pyjamas exchanged for blue quarz</translation>
    </message>
    <message>
      <source>Scrapbook</source>
      <translation>Leikekirja</translation>
    </message>
    <message>
      <source>To adjust the display drag the ruler below with the Slider.</source>
      <translation>Asettaaksesi näytön kohdista palkki viivoittimen kanssa.</translation>
    </message>
    <message>
      <source>Picas (p)</source>
      <translation>Picat (p)</translation>
    </message>
    <message>
      <source>Subscript</source>
      <translation>Alaindeksi</translation>
    </message>
    <message>
      <source>Superscript</source>
      <translation>Yläindeksi</translation>
    </message>
    <message>
      <source>Points (pt)</source>
      <translation>Pisteet (pt)</translation>
    </message>
    <message>
      <source>Display</source>
      <translation>Näyttö</translation>
    </message>
    <message>
      <source>Choose a Directory</source>
      <translation>Valitse hakemisto</translation>
    </message>
    <message>
      <source>Inches (in)</source>
      <translation>Tuumat (in)</translation>
    </message>
    <message>
      <source>Autosave</source>
      <translation>Automaattinen tallennus</translation>
    </message>
    <message>
      <source>Preferences</source>
      <translation>Asetukset</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>Sivun koko</translation>
    </message>
    <message>
      <source>General</source>
      <translation>Yleiset</translation>
    </message>
    <message>
      <source>Millimetres (mm)</source>
      <translation>Millimetrit (mm)</translation>
    </message>
    <message>
      <source>External Tools</source>
      <translation>Ulkoiset työkalut</translation>
    </message>
    <message>
      <source>Image Processing Tool</source>
      <translation>Kuvanmuokkaustyökalu</translation>
    </message>
    <message>
      <source>Misc.</source>
      <translation>Sekalaista</translation>
    </message>
    <message>
      <source>Printing</source>
      <translation>Tulostus</translation>
    </message>
    <message>
      <source>Choose the default window decoration and looks.
Scribus inherits any available KDE or Qt themes</source>
      <translation>Valitse ulkonäkö. Scribus sallii kaikkien 
mahdollisten KDE- ja QT-teemojen käytön</translation>
    </message>
    <message>
      <source>Default font size for the menus and windows</source>
      <translation>Valikoissa ja ikkunoissa käytettävän kirjaintyypin koko</translation>
    </message>
    <message>
      <source>Default unit of measurement for document editing</source>
      <translation>Asiakirjan muokkauksessa käytettävä mittayksikkö</translation>
    </message>
    <message>
      <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
      <translation>Askellettavien rivien lukumäärä hiiren rullaa käytettäessä</translation>
    </message>
    <message>
      <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
      <translation>Etäisyys, jonka sisällä Scribus mahdollistaa kohteeseen tarttumisen</translation>
    </message>
    <message>
      <source>Number of recently edited documents to show in the File menu</source>
      <translation>Viimeisten asiakirjojen lukumäärä Tiedosto-valikossa</translation>
    </message>
    <message>
      <source>Default documents directory</source>
      <translation>Oletushakemisto asiakirjoille</translation>
    </message>
    <message>
      <source>Default Scripter scripts directory</source>
      <translation>Oletushakemisto skripteille</translation>
    </message>
    <message>
      <source>Default page size, either a standard size or a custom size</source>
      <translation>Oletuskoko sivulle, joko standardi tai itse määritelty koko</translation>
    </message>
    <message>
      <source>Default orientation of document pages</source>
      <translation>Asiakirjan sivujen suunta</translation>
    </message>
    <message>
      <source>Width of document pages, editable if you have chosen a custom page size</source>
      <translation>Asiakirjan sivun leveys, muokattavissa jos valitset sivun kooksi &quot;Oma&quot;</translation>
    </message>
    <message>
      <source>Height of document pages, editable if you have chosen a custom page size</source>
      <translation>Asiakirjan sivun korkeus, muokattavissa jos valitset sivun kooksi &quot;Oma&quot;</translation>
    </message>
    <message>
      <source>Enable single or spread based layout</source>
      <translation>Sivu- tai aukeamakeskeistä ulkonäköä</translation>
    </message>
    <message>
      <source>Make the first page the left page of a document</source>
      <translation>Tee vasemmasta sivusta asiakirjan ensimmäinen sivu</translation>
    </message>
    <message>
      <source>Distance between the top margin guide and the edge of the page</source>
      <translation>Paperin reunan ja yläreunuksen välinen etäisyys</translation>
    </message>
    <message>
      <source>Distance between the bottom margin guide and the edge of the page</source>
      <translation>Paperin reunan ja alareunuksen välinen etäisyys</translation>
    </message>
    <message>
      <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
      <translation>Paperin reunan ja vasemman reunuksen välinen etäisyys.
Jos vastakkaiset sivut on valittuna, leveys määrittää oikean kokoisen reunuksen ottaen sidonnan huomioon</translation>
    </message>
    <message>
      <source>When enabled, Scribus saves a backup copy of your file with the .bak extension
each time the time period elapses</source>
      <translation>Jos valittuna, niin Scribus tallentaa kopion asiakirjastasi bak-päätteellä
aina valitun ajan kuluttua</translation>
    </message>
    <message>
      <source>Time period between saving automatically</source>
      <translation>Automaattisen tallennuksen aikaväli</translation>
    </message>
    <message>
      <source>Distance between the minor grid lines</source>
      <translation>Apuruudukon viivojen välinen etäisyys</translation>
    </message>
    <message>
      <source>Distance between the major grid lines</source>
      <translation>Pääruudukon viivojen välinen etäisyys</translation>
    </message>
    <message>
      <source>Distance within which an object will snap to your placed guides</source>
      <translation>Etäisyys, jolta kohde kiinnittyy apuviivoihin</translation>
    </message>
    <message>
      <source>Color of the minor grid lines</source>
      <translation>Apuruudukon viivojen väri</translation>
    </message>
    <message>
      <source>Color of the major grid lines</source>
      <translation>Pääruudukon viivojen väri</translation>
    </message>
    <message>
      <source>Color of the guide lines you insert</source>
      <translation>Apuviivojen väri</translation>
    </message>
    <message>
      <source>Place the grid behind your page objects</source>
      <translation>Sijoita ruudukko kohteiden taakse</translation>
    </message>
    <message>
      <source>Place the grid in front of your page objects</source>
      <translation>Sijoita ruudukko kohteiden päälle</translation>
    </message>
    <message>
      <source>Displacement above the baseline of the font on a line</source>
      <translation>Siirtymä kirjaintyypin peruslinjan yläpuolelle</translation>
    </message>
    <message>
      <source>Relative size of the superscript compared to the normal font</source>
      <translation>Yläindeksin kirjaintyypin koko verrattuna normaaliin kirjaintyyppiin</translation>
    </message>
    <message>
      <source>Displacement below the baseline of the normal font on a line</source>
      <translation>Siirtymä kirjaintyypin peruslinjan alapuolelle</translation>
    </message>
    <message>
      <source>Relative size of the subscript compared to the normal font</source>
      <translation>Alaindeksin kirjaintyypin koko verrattuna normaaliin kirjasimeen</translation>
    </message>
    <message>
      <source>Relative size of the small caps font compared to the normal font</source>
      <translation>Kapiteelin kirjainten koko verrattuna normaaliin kirjaintyyppiin</translation>
    </message>
    <message>
      <source>Percentage increase over the font size for the line spacing</source>
      <translation>Rivivälin kasvu prosentteina kirjaintyypin koosta</translation>
    </message>
    <message>
      <source>Text Frame Properties</source>
      <translation>Tekstikehyksen asetukset</translation>
    </message>
    <message>
      <source>Picture Frame Properties</source>
      <translation>Kuvakehyksen asetukset</translation>
    </message>
    <message>
      <source>Shape Drawing Properties</source>
      <translation>Kuvioiden asetukset</translation>
    </message>
    <message>
      <source>Magnification Level Defaults</source>
      <translation>Suurennostason Oletusarvot</translation>
    </message>
    <message>
      <source>Line Drawing Properties</source>
      <translation>Viivan ominaisuudet</translation>
    </message>
    <message>
      <source>Polygon Drawing Properties</source>
      <translation>Monikulmion ominaisuudet</translation>
    </message>
    <message>
      <source>Font for new text frames</source>
      <translation>Kirjaintyyppi uuteen tekstikehykseen</translation>
    </message>
    <message>
      <source>Size of font for new text frames</source>
      <translation>Kirjaintyypin koko uuteen tekstikehykseen</translation>
    </message>
    <message>
      <source>Color of font</source>
      <translation>Kirjaintyypin väri</translation>
    </message>
    <message>
      <source>Number of columns in a text frame</source>
      <translation>Tekstikehyksen palstojen lukumäärä</translation>
    </message>
    <message>
      <source>Gap between text frame columns</source>
      <translation>Kehyksen palstojen väli</translation>
    </message>
    <message>
      <source>Sample of your font</source>
      <translation>Esimerkki valitusta kirjaintyypistä</translation>
    </message>
    <message>
      <source>Picture frames allow pictures to scale to any size</source>
      <translation>Kuvakehykset sallivat kuvan skaalauksen mihin tahansa kokoon</translation>
    </message>
    <message>
      <source>Horizontal scaling of images</source>
      <translation>Kuvien vaakasuora skaalaus</translation>
    </message>
    <message>
      <source>Vertical scaling of images</source>
      <translation>Kuvien pystysuora skaalaus</translation>
    </message>
    <message>
      <source>Keep horizontal and vertical scaling the same</source>
      <translation>Säilytä sivujen suhde samana</translation>
    </message>
    <message>
      <source>Pictures in picture frames are scaled to the size of the frame</source>
      <translation>Kuvat kuvakehyksissä skaalataan kehyksen kokoon</translation>
    </message>
    <message>
      <source>Automatically scaled pictures keep their original proportions</source>
      <translation>Automaattisesti skaalatut kuvat säilyttävät sivujen väliset suhteensa</translation>
    </message>
    <message>
      <source>Fill color of picture frames</source>
      <translation>Kuvakehyksen täyttöväri</translation>
    </message>
    <message>
      <source>Saturation of color of fill</source>
      <translation>Täyttövärin sävy</translation>
    </message>
    <message>
      <source>Line color of shapes</source>
      <translation>Kuvion viivan väri</translation>
    </message>
    <message>
      <source>Saturation of color of lines</source>
      <translation>Kuvion viivan värin sävy</translation>
    </message>
    <message>
      <source>Fill color of shapes</source>
      <translation>Kuvion täyttöväri</translation>
    </message>
    <message>
      <source>Line style of shapes</source>
      <translation>Kuvion viivatyyli</translation>
    </message>
    <message>
      <source>Line width of shapes</source>
      <translation>Kuvion viivan paksuus</translation>
    </message>
    <message>
      <source>Minimum magnification allowed</source>
      <translation>Pienin sallittu pienennös</translation>
    </message>
    <message>
      <source>Maximum magnification allowed</source>
      <translation>Suurin sallittu suurennus</translation>
    </message>
    <message>
      <source>Change in magnification for each zoom operation</source>
      <translation>Suurennoksen muutos jokaisella suurennoskerralla</translation>
    </message>
    <message>
      <source>Color of lines</source>
      <translation>Viivan väri</translation>
    </message>
    <message>
      <source>Saturation of color</source>
      <translation>Värin kylläisyys</translation>
    </message>
    <message>
      <source>Style of lines</source>
      <translation>Viivan tyyli</translation>
    </message>
    <message>
      <source>Width of lines</source>
      <translation>Viivan paksuus</translation>
    </message>
    <message>
      <source>Number of corners for polygons</source>
      <translation>Monikulmion kulmien lukumäärä</translation>
    </message>
    <message>
      <source>Degrees of rotation for polygons</source>
      <translation>Monikulmion kierron aste</translation>
    </message>
    <message>
      <source>Sample Polygon</source>
      <translation>Esimerkki monikulmiosta</translation>
    </message>
    <message>
      <source>Choose the size of the preview in the scrapbook palette</source>
      <translation>Valitse esikatselukuvan koko leikekirjassa</translation>
    </message>
    <message>
      <source>When using facing pages, show the two pages side by side</source>
      <translation>Kun käytössä on vastakkaiset sivut, näytetäänkö sivut vierekkäin</translation>
    </message>
    <message>
      <source>Color for paper</source>
      <translation>Paperin väri</translation>
    </message>
    <message>
      <source>Color for the margin lines</source>
      <translation>Sivun reunusten väri</translation>
    </message>
    <message>
      <source>Mask the area outside the margins in the margin color</source>
      <translation>Merkkaa marginaalien ulkopuolinen alue marginaalin värillä</translation>
    </message>
    <message>
      <source>Enable transparency features within PDF 1.4 export</source>
      <translation>Käytä läpinäkyvyysominaisuutta PDF 1.4:nä tallennettaessa</translation>
    </message>
    <message>
      <source>Set the default zoom level</source>
      <translation>Aseta näytettävä sivun koko</translation>
    </message>
    <message>
      <source>Antialias text for EPS and PDF onscreen rendering</source>
      <translation>Antialisoi EPS- ja PDF-teksti näytöllä</translation>
    </message>
    <message>
      <source>Antialias graphics for EPS and PDF onscreen rendering</source>
      <translation>Antialisoi EPS- ja PDF-grafiikka näytöllä</translation>
    </message>
    <message>
      <source>Do not show objects outside the margins on the printed page or exported file</source>
      <translation>Älä vie tai tulosta kohteita, jotka ovat asiakirjan marginaalin ulkopuolella</translation>
    </message>
    <message>
      <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
      <translation>Paperin reunan ja oikean reunuksen välinen etäisyys.
Jos vastakkaiset sivut on valittuna, leveys määrittää oikean kokoisen reunuksen ottaen sidonnan huomioon</translation>
    </message>
    <message>
      <source>Save the scrapbook contents everytime after a change</source>
      <translation>Tallenna leikekirjan sisältö aina sen muuttuessa</translation>
    </message>
    <message>
      <source>Baseline Grid</source>
      <translation>Peruslinja</translation>
    </message>
    <message>
      <source> px</source>
      <translation>px</translation>
    </message>
    <message>
      <source>&amp;Theme:</source>
      <translation>&amp;Teema:</translation>
    </message>
    <message>
      <source>&amp;Font Size:</source>
      <translation>&amp;Kirjaintyypin koko:</translation>
    </message>
    <message>
      <source>Mouse Settings</source>
      <translation>Hiiren asetukset</translation>
    </message>
    <message>
      <source>&amp;Wheel Jump:</source>
      <translation>&amp;Rullan askellus:</translation>
    </message>
    <message>
      <source>&amp;Grab Radius:</source>
      <translation>&amp;Tarttumissäde:</translation>
    </message>
    <message>
      <source>&amp;Recent Documents:</source>
      <translation>&amp;Viimeaikaiset asiakirjat:</translation>
    </message>
    <message>
      <source>&amp;Documents:</source>
      <translation>&amp;Asiakirjat:</translation>
    </message>
    <message>
      <source>&amp;Change...</source>
      <translation>&amp;Muuta...</translation>
    </message>
    <message>
      <source>&amp;ICC Profiles:</source>
      <translation>&amp;ICC-profiilit:</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>&amp;Muuta...</translation>
    </message>
    <message>
      <source>&amp;Scripts:</source>
      <translation>&amp;Skriptit:</translation>
    </message>
    <message>
      <source>Ch&amp;ange...</source>
      <translation>&amp;Muuta...</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>&amp;Koko:</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation>&amp;Suunta:</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>&amp;Leveys:</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>&amp;Korkeus:</translation>
    </message>
    <message>
      <source>&amp;Facing Pages</source>
      <translation>&amp;Vastakkaiset sivut</translation>
    </message>
    <message>
      <source>Left &amp;Page First</source>
      <translation>Vasen &amp;sivu ensin</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation>&amp;Alhaalla:</translation>
    </message>
    <message>
      <source>&amp;Top:</source>
      <translation>&amp;Ylhäällä:</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation>&amp;Oikea:</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation>&amp;Vasen:</translation>
    </message>
    <message>
      <source>&amp;Enabled</source>
      <translation>&amp;Käytä</translation>
    </message>
    <message>
      <source>&amp;Interval:</source>
      <translation>&amp;Väli:</translation>
    </message>
    <message>
      <source>M&amp;inor Grid Spacing:</source>
      <translation>&amp;Apuruudukon välistys:</translation>
    </message>
    <message>
      <source>Ma&amp;jor Grid Spacing:</source>
      <translation>&amp;Pääruudukon välistys:</translation>
    </message>
    <message>
      <source>Guide &amp;Snap Distance:</source>
      <translation>Tarttumisetäisyys &amp;apuviivoihin:</translation>
    </message>
    <message>
      <source>Min&amp;or Grid Color:</source>
      <translation>A&amp;puruudukon väri:</translation>
    </message>
    <message>
      <source>Majo&amp;r Grid Color:</source>
      <translation>P&amp;ääruudukon väri:</translation>
    </message>
    <message>
      <source>&amp;User Guides Color:</source>
      <translation>Ap&amp;uviivojen väri:</translation>
    </message>
    <message>
      <source>Base&amp;line Grid Color:</source>
      <translation>Pe&amp;ruslinjan väri:</translation>
    </message>
    <message>
      <source>In the &amp;Background</source>
      <translation>&amp;Taustalla</translation>
    </message>
    <message>
      <source>In the Fore&amp;ground</source>
      <translation>&amp;Etualalla</translation>
    </message>
    <message>
      <source>O&amp;n</source>
      <translation>&amp;Käytössä</translation>
    </message>
    <message>
      <source>O&amp;ff</source>
      <translation>&amp;Poissa käytöstä</translation>
    </message>
    <message>
      <source>&amp;Displacement:</source>
      <translation>&amp;Siirtymä:</translation>
    </message>
    <message>
      <source>&amp;Scaling:</source>
      <translation>&amp;Skaalaus:</translation>
    </message>
    <message>
      <source>D&amp;isplacement:</source>
      <translation>S&amp;iirtymä:</translation>
    </message>
    <message>
      <source>S&amp;caling:</source>
      <translation>S&amp;kaalaus:</translation>
    </message>
    <message>
      <source>Sc&amp;aling:</source>
      <translation>Skaa&amp;laus:</translation>
    </message>
    <message>
      <source>Baseline &amp;Grid:</source>
      <translation>&amp;Peruslinja:</translation>
    </message>
    <message>
      <source>Baseline &amp;Offset:</source>
      <translation>Peruslinjan &amp;siirtymä:</translation>
    </message>
    <message>
      <source>Automatic &amp;Line Spacing:</source>
      <translation>&amp;Automaattinen riviväli:</translation>
    </message>
    <message>
      <source>Default &amp;Font:</source>
      <translation>Oletus&amp;kirjaintyyppi:</translation>
    </message>
    <message>
      <source>Default &amp;Size:</source>
      <translation>&amp;Koko:</translation>
    </message>
    <message>
      <source>&amp;Text Color:</source>
      <translation>Tekstin &amp;väri:</translation>
    </message>
    <message>
      <source>Colu&amp;mns:</source>
      <translation>&amp;Palstoja:</translation>
    </message>
    <message>
      <source>&amp;Gap:</source>
      <translation>&amp;Väli:</translation>
    </message>
    <message>
      <source>&amp;Line Color:</source>
      <translation>V&amp;iivan väri:</translation>
    </message>
    <message>
      <source>&amp;Shading:</source>
      <translation>&amp;Sävy:</translation>
    </message>
    <message>
      <source>&amp;Fill Color:</source>
      <translation>&amp;Täyttöväri:</translation>
    </message>
    <message>
      <source>S&amp;hading:</source>
      <translation>S&amp;ävy:</translation>
    </message>
    <message>
      <source>&amp;Type of Line:</source>
      <translation>&amp;Viivan tyyli:</translation>
    </message>
    <message>
      <source>Line &amp;Width:</source>
      <translation>Viivan &amp;leveys:</translation>
    </message>
    <message>
      <source>Mi&amp;nimum:</source>
      <translation>&amp;Pienin:</translation>
    </message>
    <message>
      <source>Ma&amp;ximum:</source>
      <translation>&amp;Suurin:</translation>
    </message>
    <message>
      <source>&amp;Stepping:</source>
      <translation>&amp;Askellus:</translation>
    </message>
    <message>
      <source>&amp;Free Scaling</source>
      <translation>&amp;Ei skaalausta</translation>
    </message>
    <message>
      <source>&amp;Horizontal Scaling:</source>
      <translation>&amp;Vaakasuora skaalaus:</translation>
    </message>
    <message>
      <source>&amp;Vertical Scaling:</source>
      <translation>&amp;Pystysuora skaalaus:</translation>
    </message>
    <message>
      <source>&amp;Scale Picture to Frame Size</source>
      <translation>&amp;Skaalaa kuva kehyksen kokoon</translation>
    </message>
    <message>
      <source>Keep Aspect &amp;Ratio</source>
      <translation>S&amp;äilytä sivujen suhteet</translation>
    </message>
    <message>
      <source>F&amp;ill Color:</source>
      <translation>&amp;Täyttöväri:</translation>
    </message>
    <message>
      <source>Corn&amp;ers:</source>
      <translation>&amp;Kulmat:</translation>
    </message>
    <message>
      <source>&amp;Rotation:</source>
      <translation>Ki&amp;erto:</translation>
    </message>
    <message>
      <source>&amp;Factor:</source>
      <translation>&amp;Kerroin:</translation>
    </message>
    <message>
      <source>Sa&amp;ve Contents on Changes</source>
      <translation>&amp;Tallenna muutosten jälkeen</translation>
    </message>
    <message>
      <source>Large</source>
      <translation>Iso</translation>
    </message>
    <message>
      <source>Display Pages &amp;Side by Side</source>
      <translation>&amp;Näytä sivut vierekkäin</translation>
    </message>
    <message>
      <source>Page Colors</source>
      <translation>Sivun värit</translation>
    </message>
    <message>
      <source>&amp;Background:</source>
      <translation>&amp;Tausta:</translation>
    </message>
    <message>
      <source>&amp;Margins:</source>
      <translation>&amp;Reunukset:</translation>
    </message>
    <message>
      <source>Display &amp;Unprintable Area in Margin Color</source>
      <translation>N&amp;äytä tulostumaton alue reunuksen värillä</translation>
    </message>
    <message>
      <source>Use PDF 1.4 &amp;Transparency Features</source>
      <translation>&amp;Käytä PDF 1.4:n läpinäkyvyysominaisuuksia</translation>
    </message>
    <message>
      <source>&amp;Adjust Display Size</source>
      <translation>&amp;Säädä näytön koko</translation>
    </message>
    <message>
      <source>&amp;Name of Executable:</source>
      <translation>&amp;Ajettavan tiedoston nimi:</translation>
    </message>
    <message>
      <source>Antialias &amp;Text</source>
      <translation>Antialisoi &amp;teksti</translation>
    </message>
    <message>
      <source>Antialias &amp;Graphics</source>
      <translation>Antialisoi &amp;grafiikka</translation>
    </message>
    <message>
      <source>Name of &amp;Executable:</source>
      <translation>&amp;Ajettavan tiedoston nimi:</translation>
    </message>
    <message>
      <source>Clip to Page &amp;Margins</source>
      <translation>&amp;Leikkaa sivu reunuksiin</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>&amp;Inside:</source>
      <translation>&amp;Sisäpuoli:</translation>
    </message>
    <message>
      <source>O&amp;utside:</source>
      <translation>&amp;Ulkopuoli:</translation>
    </message>
    <message>
      <source>Apply &amp;Under Color Removal</source>
      <translation>&amp;Käytä alivärinpoistoa (UCR)</translation>
    </message>
    <message>
      <source>T&amp;emplates:</source>
      <translation>&amp;Mallit:</translation>
    </message>
    <message>
      <source>Cha&amp;nge...</source>
      <translation>&amp;Muuta...</translation>
    </message>
    <message>
      <source>Additional Directory for Document Templates</source>
      <translation>Hakemisto, josta asiakirjamalleja etsitään</translation>
    </message>
    <message>
      <source>Apply &amp;Factor</source>
      <translation>Käytä &amp;kerrointa</translation>
    </message>
    <message>
      <source>Apply Convex/Concave Factor to change shape of Polygons</source>
      <translation>Käytä kuperaa/koveraa kerrointa muuttaaksesi monikulmion muodon</translation>
    </message>
    <message>
      <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
      <translation>Negatiivinen arvo tekee monikulmiosta koveran (tähden muotoisen)
positiivinen kuperan</translation>
    </message>
    <message>
      <source>Executive</source>
      <translation>Executive</translation>
    </message>
    <message>
      <source>Folio</source>
      <translation>Folio</translation>
    </message>
    <message>
      <source>Ledger</source>
      <translation>Ledger</translation>
    </message>
    <message>
      <source>Legal</source>
      <translation>Legal</translation>
    </message>
    <message>
      <source>Letter</source>
      <translation>Letter</translation>
    </message>
    <message>
      <source>Tabloid</source>
      <translation>Tabloid</translation>
    </message>
    <message>
      <source>File system location for graphics editor. If you use gimp
and your distro includes it, we recommend 'gimp-remote',
as it allows you to edit the image in an already running
instance of gimp.</source>
      <translation>Kuvan muokkaustyökalun sijainti tiedostojärjestelmässä. Jos käytät Gimppiä,
suosittelemme tässä käytettäväksi 'gimp-remote' -komentoa, joka sallii
uuden kuvan avauksen jo ennestään auki olevaan Gimppiin.</translation>
    </message>
    <message>
      <source>Default ICC profiles directory. This cannot
be changed with documents open.</source>
      <translation>Oletushakemisto ICC-profiileille. Asetusta ei voi muuttaa,
jos asiakirjoja on avoinna.</translation>
    </message>
    <message>
      <source>Turns on the base grid</source>
      <translation>Ottaa peruslinjan käyttöön</translation>
    </message>
    <message>
      <source>Turns off the base grid</source>
      <translation>Ottaa peruslinjan pois käytöstä</translation>
    </message>
    <message>
      <source>PostScript Interpreter</source>
      <translation>PostScript-tulkki</translation>
    </message>
    <message>
      <source>File system location for the GhostScript interpreter</source>
      <translation>Ghostscript-tulkin sijainti tiedostojärjestelmässä</translation>
    </message>
    <message>
      <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
      <translation>Tapa vaihtaa C, Y ja M värien tekemä harmaa mustalla tehdyksi. UCR vaikuttaa kuvien kohdissa, jotka ovat neutraaleja tai lähellä harmaata olevia tummia värejä. UCR:n käyttäminen saattaa parantaa joidenkin kuvien tulostamista. UCR parantaa kykyä välttää värien liikakylläisyyttä CMY-musteilla. Parhaan tuloksen saavuttamiseksi tarvitaan tapauskohtaista testausta. UCR vähentää ylikylläisyyden vaaraa CMY-musteilla.</translation>
    </message>
  </context>
  <context>
    <name>QColorDialog</name>
    <message>
      <source>Hu&amp;e:</source>
      <translation>&amp;H:</translation>
    </message>
    <message>
      <source>&amp;Sat:</source>
      <translation>&amp;S:</translation>
    </message>
    <message>
      <source>&amp;Val:</source>
      <translation>&amp;V:</translation>
    </message>
    <message>
      <source>&amp;Red:</source>
      <translation>&amp;Punainen:</translation>
    </message>
    <message>
      <source>&amp;Green:</source>
      <translation>V&amp;ihreä:</translation>
    </message>
    <message>
      <source>Bl&amp;ue:</source>
      <translation>Si&amp;ninen:</translation>
    </message>
    <message>
      <source>A&amp;lpha channel:</source>
      <translation>&amp;Alpha kanava:</translation>
    </message>
    <message>
      <source>&amp;Basic colors</source>
      <translation>Pe&amp;rusvärit</translation>
    </message>
    <message>
      <source>&amp;Custom colors</source>
      <translation>&amp;Omat värit</translation>
    </message>
    <message>
      <source>&amp;Define Custom Colors >></source>
      <translation>&amp;Määritä omat värit >></translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
    <message>
      <source>&amp;Add to Custom Colors</source>
      <translation>&amp;Lisää omiin väreihin</translation>
    </message>
    <message>
      <source>Select color</source>
      <translation>Valitse väri</translation>
    </message>
  </context>
  <context>
    <name>QFileDialog</name>
    <message>
      <source>Copy or Move a File</source>
      <translation>Kopioi tai siirrä tiedosto</translation>
    </message>
    <message>
      <source>Read: %1</source>
      <translation>Lue: %1</translation>
    </message>
    <message>
      <source>Write: %1</source>
      <translation>Kirjoita: %1</translation>
    </message>
    <message>
      <source>File &amp;name:</source>
      <translation>Tiedoston &amp;nimi:</translation>
    </message>
    <message>
      <source>File &amp;type:</source>
      <translation>Tiedoston &amp;tyyppi:</translation>
    </message>
    <message>
      <source>One directory up</source>
      <translation>Yksi hakemisto ylöspäin</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
    <message>
      <source>All Files (*)</source>
      <translation>Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nimi</translation>
    </message>
    <message>
      <source>Size</source>
      <translation>Koko</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>Tyyppi</translation>
    </message>
    <message>
      <source>Date</source>
      <translation>Päivämäärä</translation>
    </message>
    <message>
      <source>Attributes</source>
      <translation>Määreet</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Look &amp;in:</source>
      <translation>Nykyinen &amp;hakemisto:</translation>
    </message>
    <message>
      <source>Back</source>
      <translation>Takaisin</translation>
    </message>
    <message>
      <source>Create New Folder</source>
      <translation>Luo uusi hakemisto</translation>
    </message>
    <message>
      <source>List View</source>
      <translation>Listanäkymä</translation>
    </message>
    <message>
      <source>Detail View</source>
      <translation>Yksityiskohtainen näkymä</translation>
    </message>
    <message>
      <source>Preview File Info</source>
      <translation>Katso tiedoston tiedot</translation>
    </message>
    <message>
      <source>Preview File Contents</source>
      <translation>Katso tiedoston sisältö</translation>
    </message>
    <message>
      <source>Read-write</source>
      <translation>Luku-kirjoitus</translation>
    </message>
    <message>
      <source>Read-only</source>
      <translation>Ainoastaan luku</translation>
    </message>
    <message>
      <source>Write-only</source>
      <translation>Ainoastaan kirjoitus</translation>
    </message>
    <message>
      <source>Inaccessible</source>
      <translation>Tavoittamaton</translation>
    </message>
    <message>
      <source>Symlink to File</source>
      <translation>Symbolinen linkki tiedostoon</translation>
    </message>
    <message>
      <source>Symlink to Directory</source>
      <translation>Symbolinen linkki hakemistoon</translation>
    </message>
    <message>
      <source>Symlink to Special</source>
      <translation>Symbolinen linkki to Special</translation>
    </message>
    <message>
      <source>File</source>
      <translation>Tiedosto</translation>
    </message>
    <message>
      <source>Dir</source>
      <translation>Hakemisto</translation>
    </message>
    <message>
      <source>Special</source>
      <translation>Special</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>Avaa</translation>
    </message>
    <message>
      <source>Save As</source>
      <translation>Tallenna nimellä</translation>
    </message>
    <message>
      <source>&amp;Open</source>
      <translation>&amp;Avaa</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>&amp;Tallenna</translation>
    </message>
    <message>
      <source>&amp;Rename</source>
      <translation>Nimeä &amp;uudelleen</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>P&amp;oista</translation>
    </message>
    <message>
      <source>R&amp;eload</source>
      <translation>P&amp;äivitä</translation>
    </message>
    <message>
      <source>Sort by &amp;Name</source>
      <translation>Järjestä &amp;nimen mukaan</translation>
    </message>
    <message>
      <source>Sort by &amp;Size</source>
      <translation>Järjestä &amp;koon mukaan</translation>
    </message>
    <message>
      <source>Sort by &amp;Date</source>
      <translation>Järjestä &amp;päivämäärän mukaan</translation>
    </message>
    <message>
      <source>&amp;Unsorted</source>
      <translation>&amp;Järjestämätön</translation>
    </message>
    <message>
      <source>Sort</source>
      <translation>Järjestä</translation>
    </message>
    <message>
      <source>Show &amp;hidden files</source>
      <translation>Nä&amp;ytä piilotetut tiedostot</translation>
    </message>
    <message>
      <source>the file</source>
      <translation>tiedoston</translation>
    </message>
    <message>
      <source>the directory</source>
      <translation>hakemiston</translation>
    </message>
    <message>
      <source>the symlink</source>
      <translation>symbolisen linkin</translation>
    </message>
    <message>
      <source>Delete %1</source>
      <translation>Poista %1</translation>
    </message>
    <message>
      <source>&lt;qt>Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt></source>
      <translation>&lt;qt>Haluatko varmasti poistaa %1 &quot;%2&quot;?&lt;/qt></translation>
    </message>
    <message>
      <source>&amp;Yes</source>
      <translation>Ky&amp;llä</translation>
    </message>
    <message>
      <source>&amp;No</source>
      <translation>&amp;Ei</translation>
    </message>
    <message>
      <source>New Folder 1</source>
      <translation>Uusi hakemisto 1</translation>
    </message>
    <message>
      <source>New Folder</source>
      <translation>Uusi hakemisto</translation>
    </message>
    <message>
      <source>New Folder %1</source>
      <translation>Uusi hakemisto %1</translation>
    </message>
    <message>
      <source>Find Directory</source>
      <translation>Etsi hakemisto</translation>
    </message>
    <message>
      <source>Directories</source>
      <translation>Hakemistot</translation>
    </message>
    <message>
      <source>Save</source>
      <translation>Tallenna</translation>
    </message>
    <message>
      <source>Error</source>
      <translation>Virhe</translation>
    </message>
    <message>
      <source>%1
File not found.
Check path and filename.</source>
      <translation>%1
Tiedostoa ei löydy.
Tarkasta polku ja tiedostonimi.</translation>
    </message>
    <message>
      <source>All Files (*.*)</source>
      <translation>Kaikki tiedostot (*.*)</translation>
    </message>
    <message>
      <source>Select a Directory</source>
      <translation>Valitse hakemisto</translation>
    </message>
    <message>
      <source>Directory:</source>
      <translation>Hakemisto:</translation>
    </message>
  </context>
  <context>
    <name>QFontDialog</name>
    <message>
      <source>&amp;Font</source>
      <translation>&amp;Kirjaintyyppi</translation>
    </message>
    <message>
      <source>Font st&amp;yle</source>
      <translation>Kirjaintyypin &amp;tyyli</translation>
    </message>
    <message>
      <source>&amp;Size</source>
      <translation>K&amp;oko</translation>
    </message>
    <message>
      <source>Effects</source>
      <translation>Efektit</translation>
    </message>
    <message>
      <source>Stri&amp;keout</source>
      <translation>&amp;Yliviivattu</translation>
    </message>
    <message>
      <source>&amp;Underline</source>
      <translation>&amp;Alleviivattu</translation>
    </message>
    <message>
      <source>&amp;Color</source>
      <translation>&amp;Väri</translation>
    </message>
    <message>
      <source>Sample</source>
      <translation>Esimerkki</translation>
    </message>
    <message>
      <source>Scr&amp;ipt</source>
      <translation>Sk&amp;ripti</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Apply</source>
      <translation>Käytä</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Sulje</translation>
    </message>
    <message>
      <source>Select Font</source>
      <translation>Valitse kirjaintyyppi</translation>
    </message>
  </context>
  <context>
    <name>QLineEdit</name>
    <message>
      <source>Clear</source>
      <translation>Tyhjennä</translation>
    </message>
    <message>
      <source>Select All</source>
      <translation>Valitse kaikki</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>K&amp;umoa</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>&amp;Tee uudelleen</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>&amp;Leikkaa</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>&amp;Kopioi</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>L&amp;iitä</translation>
    </message>
  </context>
  <context>
    <name>QMainWindow</name>
    <message>
      <source>Line up</source>
      <translation>Järjestä</translation>
    </message>
    <message>
      <source>Customize...</source>
      <translation>Muokkaa...</translation>
    </message>
  </context>
  <context>
    <name>QMessageBox</name>
    <message>
      <source>&lt;h3>About Qt&lt;/h3>&lt;p>This program uses Qt version %1.&lt;/p>&lt;p>Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p>&lt;p>Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br>Qt is also available for embedded devices.&lt;/p>&lt;p>Qt is a Trolltech product. See &lt;tt>http://www.trolltech.com/qt/&lt;/tt> for more information.&lt;/p></source>
      <translation>&lt;h3>About Qt&lt;/h3>&lt;p>This program uses Qt version %1.&lt;/p>&lt;p>Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p>&lt;p>Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br>Qt is also available for embedded devices.&lt;/p>&lt;p>Qt is a Trolltech product. See &lt;tt>http://www.trolltech.com/qt/&lt;/tt> for more information.&lt;/p></translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <source>No</source>
      <translation>Ei</translation>
    </message>
    <message>
      <source>Yes</source>
      <translation>Kyllä</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>Avaa</translation>
    </message>
    <message>
      <source>Do you really want to overwrite the File:
%1 ?</source>
      <translation>Haluatko korvata tiedoston %1?</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>Tallenna nimellä</translation>
    </message>
    <message>
      <source>Online Reference</source>
      <translation>Materiaali verkossa</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
      <translation>SVG-kuvat (*.svg *.svgz);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>SVG-Images (*.svg);;All Files (*)</source>
      <translation>SVG-kuvat (*.svg);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Initializing...</source>
      <translation>Alustetaan...</translation>
    </message>
    <message>
      <source>Document</source>
      <translation>Asiakirja</translation>
    </message>
    <message>
      <source>Background</source>
      <translation>Tausta</translation>
    </message>
    <message>
      <source>File exists. Overwrite?</source>
      <translation>Tiedosto on jo olemassa. Ylikirjoitetaanko?</translation>
    </message>
    <message>
      <source>exists already. Overwrite?</source>
      <translation>on jo olemassa. Ylikirjoitetaanko?</translation>
    </message>
    <message>
      <source>Yes all</source>
      <translation>Kyllä kaikkiin</translation>
    </message>
    <message>
      <source>Error writing the output file(s).</source>
      <translation>Virhe kirjoitettaessa kohdetiedostoa.</translation>
    </message>
    <message>
      <source>Save as Image</source>
      <translation>Tallenna kuvana</translation>
    </message>
    <message>
      <source>Error writting the output file(s).</source>
      <translation>Virhe kirjoitettaessa tiedostoa.</translation>
    </message>
    <message>
      <source>Export successful.</source>
      <translation>Vienti onnistui.</translation>
    </message>
    <message>
      <source>All Supported Formats (*.eps *.EPS *.ps *.PS);;</source>
      <translation>Kaikki tuetut tiedostotyypit (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
      <source>All Files (*)</source>
      <translation>Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Newsletters</source>
      <translation>Uutislehdet</translation>
    </message>
    <message>
      <source>Brochures</source>
      <translation>Esitteet</translation>
    </message>
    <message>
      <source>Catalogs</source>
      <translation>Tuoteluettelot</translation>
    </message>
    <message>
      <source>Flyers</source>
      <translation>Lehtiset</translation>
    </message>
    <message>
      <source>Signs</source>
      <translation>Merkit</translation>
    </message>
    <message>
      <source>Cards</source>
      <translation>Kortit</translation>
    </message>
    <message>
      <source>Letterheads</source>
      <translation>Kirjeen reunukset</translation>
    </message>
    <message>
      <source>Envelopes</source>
      <translation>Kirjekuoret</translation>
    </message>
    <message>
      <source>Business Cards</source>
      <translation>Käyntikortit</translation>
    </message>
    <message>
      <source>Calendars</source>
      <translation>Kalenterit</translation>
    </message>
    <message>
      <source>Advertisements</source>
      <translation>Mainokset</translation>
    </message>
    <message>
      <source>Labels</source>
      <translation>Tarrat</translation>
    </message>
    <message>
      <source>Menus</source>
      <translation>Ruokalistat</translation>
    </message>
    <message>
      <source>Programs</source>
      <translation>Ohjelmat</translation>
    </message>
    <message>
      <source>PDF Forms</source>
      <translation>PDF-lomakkeet</translation>
    </message>
    <message>
      <source>Magazines</source>
      <translation>Lehdet</translation>
    </message>
    <message>
      <source>Posters</source>
      <translation>Julisteet</translation>
    </message>
    <message>
      <source>Announcements</source>
      <translation>Ilmoitukset</translation>
    </message>
    <message>
      <source>Text Documents</source>
      <translation>Tekstiasiakirjat</translation>
    </message>
    <message>
      <source>Folds</source>
      <translation>Taitokset</translation>
    </message>
    <message>
      <source>Own Templates</source>
      <translation>Omat mallit</translation>
    </message>
    <message>
      <source>New &amp;from Template...</source>
      <translation>Uusi &amp;mallista...</translation>
    </message>
    <message>
      <source>PDF Presentations</source>
      <translation>PDF-esitykset</translation>
    </message>
    <message>
      <source>Save as &amp;Template...</source>
      <translation>Tall&amp;enna mallina...</translation>
    </message>
    <message>
      <source>&amp;Insert Special</source>
      <translation>&amp;Lisää erikoismerkki</translation>
    </message>
    <message>
      <source>Save as &amp;Image...</source>
      <translation>Tallenna &amp;kuvana...</translation>
    </message>
    <message>
      <source>&amp;Fonts Preview</source>
      <translation>Kirjaintyyppien &amp;esikatselu</translation>
    </message>
    <message>
      <source>Print Previe&amp;w</source>
      <translation>Tulostuksen &amp;esikatselu</translation>
    </message>
    <message>
      <source>S&amp;cripter Manual...</source>
      <translation>Ohjeet &amp;skriptaamiseen...</translation>
    </message>
    <message>
      <source>Save Page as &amp;SVG...</source>
      <translation>Tallenna sivu &amp;SVG:na...</translation>
    </message>
    <message>
      <source>Import &amp;SVG...</source>
      <translation>Tuo S&amp;VG...</translation>
    </message>
    <message>
      <source>Import &amp;EPS/PS...</source>
      <translation>Tuo E&amp;PS/PS...</translation>
    </message>
    <message>
      <source>Importing text</source>
      <translation>Tuodaan tekstiä</translation>
    </message>
    <message>
      <source>All Supported Formats</source>
      <translation>Kaikki tuetut tiedostotyypit</translation>
    </message>
    <message>
      <source>Print Preview</source>
      <translation>Tulostuksen esikatselu</translation>
    </message>
    <message>
      <source>HTML Files</source>
      <translation>HTML-tiedostot</translation>
    </message>
    <message>
      <source>html</source>
      <translation>html</translation>
    </message>
    <message>
      <source>Text Files</source>
      <translation>Tekstitiedostot</translation>
    </message>
    <message>
      <source>Comma Separated Value Files</source>
      <translation>Pilkuin eroteltu tekstitiedosto</translation>
    </message>
    <message>
      <source>CSV_data</source>
      <translation>CSV_sisältö</translation>
    </message>
    <message>
      <source>CSV_header</source>
      <translation>CSV_otsikko</translation>
    </message>
    <message>
      <source>Template: </source>
      <translation>Malli:</translation>
    </message>
    <message>
      <source>
External Links
</source>
      <translation>Linkit</translation>
    </message>
    <message>
      <source>Font %1 is broken, discarding it</source>
      <translation>Kirjaintyyppi %1 on viallinen ja sitä ei käytetä</translation>
    </message>
    <message>
      <source>Text Filters</source>
      <translation>Tekstisuotimet</translation>
    </message>
    <message>
      <source>Media Cases</source>
      <translation>Kannet</translation>
    </message>
    <message>
      <source>Albanian</source>
      <translation>albania</translation>
    </message>
    <message>
      <source>Basque</source>
      <translation>baski</translation>
    </message>
    <message>
      <source>Bulgarian</source>
      <translation>bulgaria</translation>
    </message>
    <message>
      <source>Brazilian</source>
      <translation>brasilia</translation>
    </message>
    <message>
      <source>Catalan</source>
      <translation>katalonia</translation>
    </message>
    <message>
      <source>Chinese</source>
      <translation>kiina</translation>
    </message>
    <message>
      <source>Czech</source>
      <translation>tsekki</translation>
    </message>
    <message>
      <source>Danish</source>
      <translation>tanska</translation>
    </message>
    <message>
      <source>Dutch</source>
      <translation>hollanti</translation>
    </message>
    <message>
      <source>English</source>
      <translation>englanti</translation>
    </message>
    <message>
      <source>English (British)</source>
      <translation>englanti (Britti)</translation>
    </message>
    <message>
      <source>Esperanto</source>
      <translation>esperanto</translation>
    </message>
    <message>
      <source>German</source>
      <translation>saksa</translation>
    </message>
    <message>
      <source>Finnish</source>
      <translation>suomi</translation>
    </message>
    <message>
      <source>French</source>
      <translation>ranska</translation>
    </message>
    <message>
      <source>Galician</source>
      <translation>galician</translation>
    </message>
    <message>
      <source>Greek</source>
      <translation>kreikka</translation>
    </message>
    <message>
      <source>Hungarian</source>
      <translation>unkari</translation>
    </message>
    <message>
      <source>Indonesian</source>
      <translation>indonesia</translation>
    </message>
    <message>
      <source>Italian</source>
      <translation>italia</translation>
    </message>
    <message>
      <source>Korean</source>
      <translation>korea</translation>
    </message>
    <message>
      <source>Lithuanian</source>
      <translation>liettua</translation>
    </message>
    <message>
      <source>Norwegian (Bokmaal)</source>
      <translation>norja (Bokmaal)</translation>
    </message>
    <message>
      <source>Norwegian (Nnyorsk)</source>
      <translation>norja (nnyorsk)</translation>
    </message>
    <message>
      <source>Norwegian</source>
      <translation>norja</translation>
    </message>
    <message>
      <source>Polish</source>
      <translation>puola</translation>
    </message>
    <message>
      <source>Russian</source>
      <translation>venäjä</translation>
    </message>
    <message>
      <source>Swedish</source>
      <translation>ruotsi</translation>
    </message>
    <message>
      <source>Spanish</source>
      <translation>espanja</translation>
    </message>
    <message>
      <source>Spanish (Latin)</source>
      <translation>espanja (latina)</translation>
    </message>
    <message>
      <source>Slovak</source>
      <translation>slovakki</translation>
    </message>
    <message>
      <source>Slovenian</source>
      <translation>slovenia</translation>
    </message>
    <message>
      <source>Serbian</source>
      <translation>serbia</translation>
    </message>
    <message>
      <source>Tried to set progress > maximum progress</source>
      <translation>Yritettiin asettaa edistyminen > täysi edistyminen</translation>
    </message>
    <message>
      <source>Cannot get a color with an empty name.</source>
      <comment>python error</comment>
      <translation>Haettavalla värillä täytyy olla nimi.</translation>
    </message>
    <message>
      <source>Cannot change a color with an empty name.</source>
      <comment>python error</comment>
      <translation>Nimetöntä väriä ei voi muuttaa.</translation>
    </message>
    <message>
      <source>Cannot create a color with an empty name.</source>
      <comment>python error</comment>
      <translation>Nimetöntä väriä ei voi luoda.</translation>
    </message>
    <message>
      <source>Cannot delete a color with an empty name.</source>
      <comment>python error</comment>
      <translation>Nimetöntä väriä ei voi poistaa.</translation>
    </message>
    <message>
      <source>Cannot replace a color with an empty name.</source>
      <comment>python error</comment>
      <translation>Nimetöntä väriä ei voi korvata.</translation>
    </message>
    <message>
      <source>Failed to open document</source>
      <comment>python error</comment>
      <translation>Asiakirjan avaus epäonnistui</translation>
    </message>
    <message>
      <source>Failed to save document</source>
      <comment>python error</comment>
      <translation>Asiakirjan tallennus epäonnistui</translation>
    </message>
    <message>
      <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
      <comment>python error</comment>
      <translation>Yksikkö sallittujen rajojen ulkopuolella. Käytä jotain scribus.UNIT_* vakioista.</translation>
    </message>
    <message>
      <source>Target is not an image frame.</source>
      <comment>python error</comment>
      <translation>Kohde ei ole kuvakehys.</translation>
    </message>
    <message>
      <source>An object with the requested name already exists</source>
      <comment>python error</comment>
      <translation>Kohde halutulla nimellä on jo olemassa</translation>
    </message>
    <message>
      <source>Point list must contain at least two points (four values)</source>
      <comment>python error</comment>
      <translation>Pistelistan täytyy sisältää vähintään kaksi pistettä (neljä arvoa)</translation>
    </message>
    <message>
      <source>Point list must contain an even number of values</source>
      <comment>python error</comment>
      <translation>Pistelistan täytyy sisältää parillinen määrä arvoja</translation>
    </message>
    <message>
      <source>Point list must contain at least three points (six values)</source>
      <comment>python error</comment>
      <translation>Pistelistan täytyy sisältää vähintään kolme pistettä (kuusi arvoa)</translation>
    </message>
    <message>
      <source>Point list must contain at least four points (eight values)</source>
      <comment>python error</comment>
      <translation>Pistelistan täytyy sisältää vähintään neljä pistettä (kahdeksan arvoa)</translation>
    </message>
    <message>
      <source>Point list must have a multiple of six values</source>
      <comment>python error</comment>
      <translation>Pistelistassa täytyy olla arvoja kuuden monikerta</translation>
    </message>
    <message>
      <source>Object not found</source>
      <comment>python error</comment>
      <translation>Kohdetta ei löydy</translation>
    </message>
    <message>
      <source>Style not found</source>
      <comment>python error</comment>
      <translation>Tyyliä ei löydy</translation>
    </message>
    <message>
      <source>Can't set style on a non-text frame</source>
      <comment>python error</comment>
      <translation>Tyyliä ei voi asettaa muille kuin tekstikehyksille</translation>
    </message>
    <message>
      <source>Failed to save EPS</source>
      <comment>python error</comment>
      <translation>EPS:n tallennus epäonnistui</translation>
    </message>
    <message>
      <source>Page number out of range</source>
      <comment>python error</comment>
      <translation>Sivunumero sallitun alueen ulkopuolella</translation>
    </message>
    <message>
      <source>argument is not list: must be list of float values</source>
      <comment>python error</comment>
      <translation>Parametri ei ole lista: täytyy olla float-lista</translation>
    </message>
    <message>
      <source>argument contains non-numeric values: must be list of float values</source>
      <comment>python error</comment>
      <translation>parametri ei saa sisältää muita kuin numeroarvoja: täytyy olla float-lista</translation>
    </message>
    <message>
      <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12</source>
      <comment>python error</comment>
      <translation>Viivan leveys sallittujen rajojen ulkopuolella, täytyy olla välillä 0 &lt;= viivan leveys &lt;= 12</translation>
    </message>
    <message>
      <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
      <comment>python error</comment>
      <translation>Viivan sävy sallittun rajan ulkopuolla. Täytyy olla välillä 0 &lt;= viivan sävy &lt;= 100</translation>
    </message>
    <message>
      <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
      <comment>python error</comment>
      <translation>Täyttövärin sävy sallitun rajan ulkopuolella. Täytyy olla välillä 0 &lt;= sävy &lt;= 100</translation>
    </message>
    <message>
      <source>Corner radius must be a positive number.</source>
      <comment>python error</comment>
      <translation>Kulman säde täytyy olla positiivinen numero.</translation>
    </message>
    <message>
      <source>Line style not found</source>
      <comment>python error</comment>
      <translation>Viivatyyliä ei löydy</translation>
    </message>
    <message>
      <source>Cannot get font size of non-text frame.</source>
      <comment>python error</comment>
      <translation>Kirjaintyypin kokoa ei voi saada muusta kuin tekstikehyksestä.</translation>
    </message>
    <message>
      <source>Cannot get font of non-text frame.</source>
      <comment>python error</comment>
      <translation>Kirjaintyyppiä ei voi saada muusta kuin tekstikehyksestä.</translation>
    </message>
    <message>
      <source>Cannot get text size of non-text frame.</source>
      <comment>python error</comment>
      <translation>Kirjasimen kokoa ei voi saada muusta kuin tekstikehyksestä.</translation>
    </message>
    <message>
      <source>Cannot get column count of non-text frame.</source>
      <comment>python error</comment>
      <translation>Palstojen lukumäärää ei voi saada muusta kuin tekstikehyksestä.</translation>
    </message>
    <message>
      <source>Cannot get line space of non-text frame.</source>
      <comment>python error</comment>
      <translation>Riviväliä ei voi saada muusta kuin tekstikehyksestä.</translation>
    </message>
    <message>
      <source>Cannot get column gap of non-text frame.</source>
      <comment>python error</comment>
      <translation>Palstojen väliä ei voi saada muusta kuin tekstikehyksestä.</translation>
    </message>
    <message>
      <source>Cannot get text of non-text frame.</source>
      <comment>python error</comment>
      <translation>Tekstiä ei voi saada muusta kuin tekstikehyksestä.</translation>
    </message>
    <message>
      <source>Cannot set text of non-text frame.</source>
      <comment>python error</comment>
      <translation>Tekstiä ei voi tuoda kuin tekstikehykseen.</translation>
    </message>
    <message>
      <source>Cannot insert text into non-text frame.</source>
      <comment>python error</comment>
      <translation>Tekstiä ei voi lisätä muuhun kuin tekstikehykseen.</translation>
    </message>
    <message>
      <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
      <comment>python error</comment>
      <translation>Tasaus rajojen ulkopuolella. Käytä jotain scribus.ALIGN* vakioista.</translation>
    </message>
    <message>
      <source>Selection index out of bounds</source>
      <comment>python error</comment>
      <translation>Valinnan indeksi sallittujen rajojen ulkopuolella</translation>
    </message>
    <message>
      <source>Import &amp;OpenOffice.org Draw...</source>
      <translation>Tuo &amp;OpenOffice.org Draw...</translation>
    </message>
    <message>
      <source>OpenOffice.org Draw (*.sxd);;All Files (*)</source>
      <translation>OpenOffice.org Draw (*.sxd);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>OpenOffice.org Writer Documents</source>
      <translation>OpenOffice.org Writer asiakirjat</translation>
    </message>
    <message>
      <source>Afrikaans</source>
      <translation>afrikaans</translation>
    </message>
    <message>
      <source>Turkish</source>
      <translation>turkki</translation>
    </message>
    <message>
      <source>Ukranian</source>
      <translation>ukraina</translation>
    </message>
    <message>
      <source>Welsh</source>
      <translation>wales</translation>
    </message>
    <message>
      <source>Cannot get a colour with an empty name.</source>
      <comment>python error</comment>
      <translation>Tyhjällä nimellä i voi hakea väriä</translation>
    </message>
    <message>
      <source>Color not found - python error</source>
      <comment>python error</comment>
      <translation>Väriä ei löydy - python virhe</translation>
    </message>
    <message>
      <source>The filename must be a string.</source>
      <comment>python error</comment>
      <translation>Tiedostonimen täytyy olla string.</translation>
    </message>
    <message>
      <source>Cannot delete image type settings.</source>
      <comment>python error</comment>
      <translation>Kuvan tyypin asetuksia ei voi poistaa</translation>
    </message>
    <message>
      <source>The image type must be a string.</source>
      <comment>python error</comment>
      <translation>Kuvan tyypin täytyy olla string.</translation>
    </message>
    <message>
      <source>'allTypes' attribute is READ-ONLY</source>
      <comment>python error</comment>
      <translation>'allTypes' parametri on ainoastaan lukua varten</translation>
    </message>
    <message>
      <source>Failed to export image</source>
      <comment>python error</comment>
      <translation>Kuvan vienti epäonnistui</translation>
    </message>
    <message>
      <source>Scribus Python interface module

This module is the Python interface for Scribus. It provides functions
to control scribus and to manipulate objects on the canvas. Each
function is documented individually below.

A few things are common across most of the interface.

Most functions operate on frames. Frames are identified by their name,
a string - they are not real Python objects. Many functions take an
optional (non-keyword) parameter, a frame name.
Many exceptions are also common across most functions. These are
not currently documented in the docstring for each function.
- Many functions will raise a NoDocOpenError if you try to use themwithout a document to operate on.
- If you do not pass a frame name to a function that requires one,the function will use the currently selected frame, if any, orraise a NoValidObjectError if it can't find anything to operateon.
- Many functions will raise WrongFrameTypeError if you try to use them
on a frame type that they do not make sense with. For example, setting
the text colour on a graphics frame doesn't make sense, and will result
in this exception being raised.
- Errors resulting from calls to the underlying Python API will be
passed through unaltered. As such, the list of exceptions thrown by
any function as provided here and in its docstring is incomplete.

Details of what exceptions each function may throw are provided on the
function's documentation.</source>
      <translation>Scribus Python interface module 
 
This module is the Python interface for Scribus. It provides functions 
to control scribus and to manipulate objects on the canvas. Each 
function is documented individually below. 
 
A few things are common across most of the interface. 
 
Most functions operate on frames. Frames are identified by their name, 
a string - they are not real Python objects. Many functions take an 
optional (non-keyword) parameter, a frame name. 
Many exceptions are also common across most functions. These are 
not currently documented in the docstring for each function. 
- Many functions will raise a NoDocOpenError if you try to use themwithout a document to operate on. 
- If you do not pass a frame name to a function that requires one,the function will use the currently selected frame, if any, orraise a NoValidObjectError if it can't find anything to operateon. 
- Many functions will raise WrongFrameTypeError if you try to use them 
on a frame type that they do not make sense with. For example, setting 
the text colour on a graphics frame doesn't make sense, and will result 
in this exception being raised. 
- Errors resulting from calls to the underlying Python API will be 
passed through unaltered. As such, the list of exceptions thrown by 
any function as provided here and in its docstring is incomplete. 
 
Details of what exceptions each function may throw are provided on the 
function's documentation.</translation>
    </message>
    <message>
      <source>Custom (optional) configuration: </source>
      <comment>short words plugin</comment>
      <translation>Oma (valinnainen) asetus:</translation>
    </message>
    <message>
      <source>Standard configuration: </source>
      <comment>short words plugin</comment>
      <translation>Perusasetus: </translation>
    </message>
    <message>
      <source>Short &amp;Words...</source>
      <comment>short words plugin</comment>
      <translation>Short &amp;Words...</translation>
    </message>
    <message>
      <source>Short Words processing. Wait please...</source>
      <comment>short words plugin</comment>
      <translation>Short Words. Odota hetki...</translation>
    </message>
    <message>
      <source>Short Words processing. Done.</source>
      <comment>short words plugin</comment>
      <translation>Short Words valmis.</translation>
    </message>
    <message>
      <source>Portuguese (Brazilian)</source>
      <translation>Portugali (Brasilia)</translation>
    </message>
    <message>
      <source>Color not found.</source>
      <comment>python error</comment>
      <translation>Väriä ei löydy.</translation>
    </message>
    <message>
      <source>Color not found in document.</source>
      <comment>python error</comment>
      <translation>Väriä ei löydy asiakirjasta.</translation>
    </message>
    <message>
      <source>Color not found in default colors.</source>
      <comment>python error</comment>
      <translation>Väriä ei löydy oletusväreistä</translation>
    </message>
    <message>
      <source>Cannot scale by 0%.</source>
      <comment>python error</comment>
      <translation>Kokoa ei voi skaalta 0 %:lla</translation>
    </message>
    <message>
      <source>Specified item not an image frame.</source>
      <comment>python error</comment>
      <translation>Valittu kohde ei ole kuvakehys.</translation>
    </message>
    <message>
      <source>Font not found.</source>
      <comment>python error</comment>
      <translation>Kirjaintyyppiä ei löydy.</translation>
    </message>
    <message>
      <source>Cannot render an empty sample.</source>
      <comment>python error</comment>
      <translation>Tyhjää esimerkkiä ei voi renderöidä</translation>
    </message>
    <message>
      <source>Unable to save pixmap.</source>
      <comment>scripter error</comment>
      <translation>Bittikarttakuvaa ei voida tallentaa.</translation>
    </message>
    <message>
      <source>Cannot have an empty layer name.</source>
      <comment>python error</comment>
      <translation>Tasolla täytyy olla nimi</translation>
    </message>
    <message>
      <source>Layer not found.</source>
      <comment>python error</comment>
      <translation>Tasoa ei löydy.</translation>
    </message>
    <message>
      <source>Cannot remove the last layer.</source>
      <comment>python error</comment>
      <translation>Viimeistä tasoa ei voi poistaa</translation>
    </message>
    <message>
      <source>Cannot create layer without a name.</source>
      <comment>python error</comment>
      <translation>Tasoa ei voi luoda ilman nimeä</translation>
    </message>
    <message>
      <source>Insert index out of bounds.</source>
      <comment>python error</comment>
      <translation>Lisäysindeksi virheellinen.</translation>
    </message>
    <message>
      <source>Cannot set text alignment on a non-text frame.</source>
      <comment>python error</comment>
      <translation>Tekstin tasauksen voi asettaa ainoastaan tekstikehykselle</translation>
    </message>
    <message>
      <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512.</source>
      <comment>python error</comment>
      <translation>Kirjaintyypin koko virheellinen. Täytyy olla 1 &lt;= koko &lt;= 512.</translation>
    </message>
    <message>
      <source>Cannot set font size on a non-text frame.</source>
      <comment>python error</comment>
      <translation>Kirjaintyypin koon voi asettaa vain tekstikehyksessä.</translation>
    </message>
    <message>
      <source>Cannot set font on a non-text frame.</source>
      <comment>python error</comment>
      <translation>Kirjaintyypin voi asettaa vain tekstikehyksessä.</translation>
    </message>
    <message>
      <source>Line space out of bounds, must be >= 0.1.</source>
      <comment>python error</comment>
      <translation>Riviväli virheellinen. Täytyy olla >= 0,1.</translation>
    </message>
    <message>
      <source>Cannot set line spacing on a non-text frame.</source>
      <comment>python error</comment>
      <translation>Rivivälin voi asettaa ainoastaan tekstikehykselle.</translation>
    </message>
    <message>
      <source>Column gap out of bounds, must be positive.</source>
      <comment>python error</comment>
      <translation>Palstojen väli virheellinen. Täytyy olla >= 0.</translation>
    </message>
    <message>
      <source>Cannot set column gap on a non-text frame.</source>
      <comment>python error</comment>
      <translation>Palstojen välin voi asettaa ainoastaan tekstikehyksellä</translation>
    </message>
    <message>
      <source>Column count out of bounds, must be > 1.</source>
      <comment>python error</comment>
      <translation>Palstojen lukumäärä virheellinen. Täytyy olla > 1.</translation>
    </message>
    <message>
      <source>Cannot set number of columns on a non-text frame.</source>
      <comment>python error</comment>
      <translation>Palstojen lukumäärän voi asettaa ainoastaan tekstikehykselle</translation>
    </message>
    <message>
      <source>Cannot select text in a non-text frame</source>
      <comment>python error</comment>
      <translation>Tekstiä voi valita ainoastaan tekstikehyksestä</translation>
    </message>
    <message>
      <source>Cannot delete text from a non-text frame.</source>
      <comment>python error</comment>
      <translation>Tekstiä ei voi poistaa muusta kuin tekstikehyksestä</translation>
    </message>
    <message>
      <source>Cannot set text fill on a non-text frame.</source>
      <comment>python error</comment>
      <translation>Tekstin täyttövärin voi asettaa ainoastaan tekstikehykselle</translation>
    </message>
    <message>
      <source>Cannot set text stroke on a non-text frame.</source>
      <comment>python error</comment>
      <translation>Tekstin reunuksen voi asettaa vain tekstikehykselle</translation>
    </message>
    <message>
      <source>Cannot set text shade on a non-text frame.</source>
      <comment>python error</comment>
      <translation>Tekstin täyttövärin sävyn voi asettaa ainoastaan tekstikehykselle</translation>
    </message>
    <message>
      <source>Can only link text frames.</source>
      <comment>python error</comment>
      <translation>Ainoastaan tekstikehyksiä voi linkittää</translation>
    </message>
    <message>
      <source>Target frame must be empty.</source>
      <comment>python error</comment>
      <translation>Kohdekehyksen täytyy olla tyhjä.</translation>
    </message>
    <message>
      <source>Target frame links to another frame.</source>
      <comment>python error</comment>
      <translation>Kohdekehys linkitetään toiseen kehykseen.</translation>
    </message>
    <message>
      <source>Target frame is linked to by another frame.</source>
      <comment>python error</comment>
      <translation>Kohdekehys on linkitetty toiseen kehykseen.</translation>
    </message>
    <message>
      <source>Source and target are the same object.</source>
      <comment>python error</comment>
      <translation>Lähde ja kohde ovat samat.</translation>
    </message>
    <message>
      <source>Cannot unlink a non-text frame.</source>
      <comment>python error</comment>
      <translation>Ainoastaan tekstikehyksestä linkitys voidaan poistaa</translation>
    </message>
    <message>
      <source>Object is not a linked text frame, cannot unlink.</source>
      <comment>python error</comment>
      <translation>Kohde ei ole linkitetty tekstikehys. Linkitystä ei voida poistaa.</translation>
    </message>
    <message>
      <source>Object the last frame in a series, cannot unlink. Unlink the previous frame instead.</source>
      <comment>python error</comment>
      <translation>Kohde on linkkiketjun viimeinen jäsen. Siitä ei voi poistaa linkitystä. Poista linkitys edellisestä kehyksestä viimeisen sijaan.</translation>
    </message>
    <message>
      <source>Cannot convert a non-text frame to outlines.</source>
      <comment>python error</comment>
      <translation>Ainoastaan tekstikehyksen voi muuntaa ääriviivoiksi</translation>
    </message>
    <message>
      <source>Can't set bookmark on a non-text frame</source>
      <comment>python error</comment>
      <translation>Kirjanmerkkiä ei voi asettaa kuin tekstikehykselle</translation>
    </message>
    <message>
      <source>Can't get info from a non-text frame</source>
      <comment>python error</comment>
      <translation>Informaatiota ei voi saada muista kuin tekstikehyksistä</translation>
    </message>
    <message>
      <source>OpenDocument Text Documents</source>
      <translation>OpenDocument tekstiasiakirjat</translation>
    </message>
    <message>
      <source>Croatian</source>
      <translation>kroatia</translation>
    </message>
    <message>
      <source>Color not found</source>
      <comment>python error</comment>
      <translation>Väriä ei löydy</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>Normal</translation>
    </message>
    <message>
      <source>page</source>
      <comment>page export</comment>
      <translation>sivu</translation>
    </message>
    <message>
      <source>The changes to your document have not been saved and you have requested to revert them. Do you wish to continue?</source>
      <translation>Muutoksia asiakirjaan ei ole tallennettu ja olet pyytänyt palauttamaan viimeksi tallennetun. Haluatko kumota muutokset ja palauttaa tallennetun asiakirjan?</translation>
    </message>
    <message>
      <source>firstPageOrder is bigger than allowed.</source>
      <comment>python error</comment>
      <translation>firstPageOrder on sallittua arvoa suurempi</translation>
    </message>
    <message>
      <source>Only text frames can be checked for overflowing</source>
      <comment>python error</comment>
      <translation>Ainoastaan tekstikehyksestä voi tarkastaa ylivuodon </translation>
    </message>
    <message>
      <source>Dzongkha</source>
      <translation>dzongkha</translation>
    </message>
    <message>
      <source>Icelandic</source>
      <translation>islanti</translation>
    </message>
    <message>
      <source>Font %1 (found using fontconfig) is broken, discarding it</source>
      <translation>Kirjaintyyppi %1 (löydettiin fontconfigin avulla) on rikki. Sitä ei oteta käyttöön.</translation>
    </message>
    <message>
      <source>Failed to load a font - freetype couldn't find the font file</source>
      <translation>Kirjaintyypin lataus epäonnistui. Freetype ei löytänyt kirjaintyypin tiedostoa</translation>
    </message>
    <message>
      <source>Word Documents</source>
      <translation>Word-dokumentit</translation>
    </message>
  </context>
  <context>
    <name>QTextEdit</name>
    <message>
      <source>Clear</source>
      <translation>Tyhjennä</translation>
    </message>
    <message>
      <source>Select All</source>
      <translation>Valitse kaikki</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>K&amp;umoa</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>Tee &amp;uudelleen</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>&amp;Leikkaa</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>&amp;Kopioi</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>L&amp;iitä</translation>
    </message>
  </context>
  <context>
    <name>QTitleBar</name>
    <message>
      <source>System Menu</source>
      <translation>Järjestelmän valikko</translation>
    </message>
    <message>
      <source>Shade</source>
      <translation>Varjosta</translation>
    </message>
    <message>
      <source>Unshade</source>
      <translation>Paljasta</translation>
    </message>
    <message>
      <source>Normalize</source>
      <translation>Palauta</translation>
    </message>
    <message>
      <source>Minimize</source>
      <translation>Pienennä</translation>
    </message>
    <message>
      <source>Maximize</source>
      <translation>Suurenna</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Sulje</translation>
    </message>
  </context>
  <context>
    <name>QWorkspace</name>
    <message>
      <source>&amp;Restore</source>
      <translation>P&amp;alauta</translation>
    </message>
    <message>
      <source>&amp;Move</source>
      <translation>S&amp;iirrä</translation>
    </message>
    <message>
      <source>&amp;Size</source>
      <translation>&amp;Koko</translation>
    </message>
    <message>
      <source>Mi&amp;nimize</source>
      <translation>&amp;Pienennä</translation>
    </message>
    <message>
      <source>Ma&amp;ximize</source>
      <translation>S&amp;uurenna</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>&amp;Sulje</translation>
    </message>
    <message>
      <source>Stay on &amp;Top</source>
      <translation>Pää&amp;llimmäisenä</translation>
    </message>
    <message>
      <source>Minimize</source>
      <translation>Pienennä</translation>
    </message>
    <message>
      <source>Restore Down</source>
      <translation>Palauta</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Sulje</translation>
    </message>
    <message>
      <source>Sh&amp;ade</source>
      <translation>Va&amp;rjosta</translation>
    </message>
    <message>
      <source>%1 - [%2]</source>
      <translation>%1 - [%2]</translation>
    </message>
    <message>
      <source>&amp;Unshade</source>
      <translation>Paljas&amp;ta</translation>
    </message>
  </context>
  <context>
    <name>Query</name>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>ReformDoc</name>
    <message>
      <source>Document Setup</source>
      <translation>Asiakirjan asettelu</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation>Reunukset</translation>
    </message>
    <message>
      <source>Enable single or spread based layout</source>
      <translation>Sivu- tai aukeamakeskeinen ulkonäkö</translation>
    </message>
    <message>
      <source>Make the first page the left page of the document</source>
      <translation>Tee asiakirjan vasemmasta sivusta ensimmäinen sivu</translation>
    </message>
    <message>
      <source>Distance between the top margin guide and the edge of the page</source>
      <translation>Paperin reunan ja yläreunuksen välinen etäisyys</translation>
    </message>
    <message>
      <source>Distance between the bottom margin guide and the edge of the page</source>
      <translation>Paperin reunan ja alareunuksen välinen etäisyys</translation>
    </message>
    <message>
      <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
      <translation>Paperin reunan ja vasemman reunuksen välinen etäisyys.
Jos vastakkaiset sivut on valittuna, leveys määrittää oikean kokoisen reunuksen ottaen sidonnan huomioon</translation>
    </message>
    <message>
      <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
      <translation>Paperin reunan ja oikean reunuksen välinen etäisyys.
Jos vastakkaiset sivut on valittuna, leveys määrittää oikean kokoisen reunuksen ottaen sidonnan huomioon</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
    <message>
      <source>&amp;Top:</source>
      <translation>&amp;Ylhäällä:</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation>&amp;Vasen:</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation>&amp;Alhaalla:</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation>O&amp;ikea:</translation>
    </message>
    <message>
      <source>&amp;Facing Pages</source>
      <translation>&amp;Vastakkaiset sivut</translation>
    </message>
    <message>
      <source>Left &amp;Page First</source>
      <translation>Vasen &amp;sivu ensin</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>&amp;Inside:</source>
      <translation>&amp;Sisäpuoli:</translation>
    </message>
    <message>
      <source>&amp;Outside:</source>
      <translation>&amp;Ulkopuoli:</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>Sivun koko</translation>
    </message>
    <message>
      <source>Size:</source>
      <translation>Koko:</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>Oma</translation>
    </message>
    <message>
      <source>Orientation:</source>
      <translation>Suunta:</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>Pystysuora</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>Vaakasuora</translation>
    </message>
    <message>
      <source>Width:</source>
      <translation>Leveys:</translation>
    </message>
    <message>
      <source>Height:</source>
      <translation>Korkeus:</translation>
    </message>
    <message>
      <source>F&amp;irst Page Number:</source>
      <translation>&amp;Ensimmäisen sivun numero:</translation>
    </message>
  </context>
  <context>
    <name>SToolBAlign</name>
    <message>
      <source>Style of current paragraph</source>
      <translation>Valitun kappaleen tyyli</translation>
    </message>
    <message>
      <source>Style Settings</source>
      <translation>Tyylin asetukset</translation>
    </message>
  </context>
  <context>
    <name>SToolBColorF</name>
    <message>
      <source>None</source>
      <translation>Ei mitään</translation>
    </message>
    <message>
      <source>Color of text fill</source>
      <translation>Tekstin täytön väri</translation>
    </message>
    <message>
      <source>Saturation of color of text fill</source>
      <translation>Tekstin täytön värin kylläisyys</translation>
    </message>
    <message>
      <source>Fill Color Settings</source>
      <translation>Täyttövärin asetukset</translation>
    </message>
  </context>
  <context>
    <name>SToolBColorS</name>
    <message>
      <source>None</source>
      <translation>Ei mitään</translation>
    </message>
    <message>
      <source>Color of text stroke</source>
      <translation>Tekstin reunan väri</translation>
    </message>
    <message>
      <source>Saturation of color of text stroke</source>
      <translation>Tekstin reunan värin kylläisyys</translation>
    </message>
    <message>
      <source>Stroke Color Settings</source>
      <translation>Ääriviivan värin asetukset</translation>
    </message>
  </context>
  <context>
    <name>SToolBFont</name>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Font of selected text</source>
      <translation>Valitun tekstin kirjaintyyppi</translation>
    </message>
    <message>
      <source>Font Size</source>
      <translation>Kirjaintyypin koko</translation>
    </message>
    <message>
      <source>Scaling width of characters</source>
      <translation>Merkkien leveyssuuntainen skaalaus</translation>
    </message>
    <message>
      <source>Font Settings</source>
      <translation>Kirjaintyypin asetukset</translation>
    </message>
  </context>
  <context>
    <name>SToolBStyle</name>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>Character Settings</source>
      <translation>Kirjaintyypin asetukset</translation>
    </message>
    <message>
      <source>Tracking:</source>
      <translation>Merkkiväli:</translation>
    </message>
    <message>
      <source>Manual Tracking</source>
      <translation>Oma merkkiväli</translation>
    </message>
  </context>
  <context>
    <name>ScToolBar</name>
    <message>
      <source>Top</source>
      <translation>Yläreunaan</translation>
    </message>
    <message>
      <source>Right</source>
      <translation>Oikeaan reunaan</translation>
    </message>
    <message>
      <source>Bottom</source>
      <translation>Alareunaan</translation>
    </message>
    <message>
      <source>Left</source>
      <translation>Vasempaan reunaan</translation>
    </message>
    <message>
      <source>Allow Docking To...</source>
      <translation>Salli kiinnittäminen...</translation>
    </message>
    <message>
      <source>Horizontal</source>
      <translation>Vaakasuora</translation>
    </message>
    <message>
      <source>Vertical</source>
      <translation>Pystysuora</translation>
    </message>
    <message>
      <source>Floating Orientation...</source>
      <translation>Suunta kelluessa</translation>
    </message>
  </context>
  <context>
    <name>ScriXmlDoc</name>
    <message>
      <source>Copy #%1 of </source>
      <translation>Kopio #%1/</translation>
    </message>
    <message>
      <source>Background</source>
      <translation>Tausta</translation>
    </message>
  </context>
  <context>
    <name>ScribusApp</name>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>50%</source>
      <translation>50%</translation>
    </message>
    <message>
      <source>75%</source>
      <translation>75%</translation>
    </message>
    <message>
      <source>All</source>
      <translation>Kaikki</translation>
    </message>
    <message>
      <source>Cut</source>
      <translation>Leikkaa</translation>
    </message>
    <message>
      <source>New</source>
      <translation>Uusi</translation>
    </message>
    <message>
      <source>200%</source>
      <translation>200%</translation>
    </message>
    <message>
      <source>Copy</source>
      <translation>Kopioi</translation>
    </message>
    <message>
      <source>File</source>
      <translation>Tiedosto</translation>
    </message>
    <message>
      <source>Font</source>
      <translation>Kirjaintyyppi</translation>
    </message>
    <message>
      <source>Lock</source>
      <translation>Lukitse</translation>
    </message>
    <message>
      <source>None</source>
      <translation>Ei mitään</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>Avaa</translation>
    </message>
    <message>
      <source>Quit</source>
      <translation>Lopeta</translation>
    </message>
    <message>
      <source>Save</source>
      <translation>Tallenna</translation>
    </message>
    <message>
      <source>Size</source>
      <translation>Koko</translation>
    </message>
    <message>
      <source>Exiting now</source>
      <translation>Poistutaan nyt</translation>
    </message>
    <message>
      <source>Undo</source>
      <translation>Kumoa</translation>
    </message>
    <message>
      <source>Align Right</source>
      <translation>Tasaa oikealle</translation>
    </message>
    <message>
      <source>Strikethru</source>
      <translation>Yliviivattu</translation>
    </message>
    <message>
      <source>Align Center</source>
      <translation>Keskitä</translation>
    </message>
    <message>
      <source>Styles...</source>
      <translation>Tyylit...</translation>
    </message>
    <message>
      <source>Distribute/Align...</source>
      <translation>Jaa/Tasaa...</translation>
    </message>
    <message>
      <source>Clear</source>
      <translation>Tyhjennä</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Sulje</translation>
    </message>
    <message>
      <source>Color</source>
      <translation>Väri</translation>
    </message>
    <message>
      <source>Czech</source>
      <translation>tsekki</translation>
    </message>
    <message>
      <source>Dutch</source>
      <translation>hollanti</translation>
    </message>
    <message>
      <source>Greek</source>
      <translation>kreikka</translation>
    </message>
    <message>
      <source>Group</source>
      <translation>Ryhmitä</translation>
    </message>
    <message>
      <source>Lower</source>
      <translation>Vie alaspäin</translation>
    </message>
    <message>
      <source>Paste</source>
      <translation>Liitä</translation>
    </message>
    <message>
      <source>Raise</source>
      <translation>Tuo ylöspäin</translation>
    </message>
    <message>
      <source>Ready</source>
      <translation>Valmis</translation>
    </message>
    <message>
      <source>Shade</source>
      <translation>Sävy</translation>
    </message>
    <message>
      <source>Style</source>
      <translation>Tyyli</translation>
    </message>
    <message>
      <source>Tools</source>
      <translation>Työkalut</translation>
    </message>
    <message>
      <source>Send to Back</source>
      <translation>Vie alimmaiseksi</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
      <translation>Asiakirjat (*.sla *.sla.gz *.scd *.scd.gz);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>The following Programs are missing:</source>
      <translation>Seuraavat ohjelmat puuttuvat:</translation>
    </message>
    <message>
      <source>Italian</source>
      <translation>italia</translation>
    </message>
    <message>
      <source>Snap to Grid</source>
      <translation>Kiinnitä ruudukkoon</translation>
    </message>
    <message>
      <source>Initializing Plugins</source>
      <translation>Alustetaan pluginejä</translation>
    </message>
    <message>
      <source>Un-group</source>
      <translation>Pura ryhmitys</translation>
    </message>
    <message>
      <source>Smart Hyphen</source>
      <translation>Älykäs tavutus</translation>
    </message>
    <message>
      <source>Delete...</source>
      <translation>Poista...</translation>
    </message>
    <message>
      <source>Small Caps</source>
      <translation>Kapiteelit</translation>
    </message>
    <message>
      <source>Multiple Duplicate</source>
      <translation>Useita kopioita</translation>
    </message>
    <message>
      <source>Show Page Palette</source>
      <translation>Näytä sivun hallinta</translation>
    </message>
    <message>
      <source>Colors...</source>
      <translation>Värit...</translation>
    </message>
    <message>
      <source>Thumbnails</source>
      <translation>Esikatselukuvat</translation>
    </message>
    <message>
      <source>Searching for Fonts</source>
      <translation>Etsitään kirjaintyyppejä</translation>
    </message>
    <message>
      <source>Document Info...</source>
      <translation>Asiakirjan tiedot...</translation>
    </message>
    <message>
      <source>Move...</source>
      <translation>Siirrä...</translation>
    </message>
    <message>
      <source>Hide Frames</source>
      <translation>Piilota kehykset</translation>
    </message>
    <message>
      <source>Danish</source>
      <translation>tanska</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation>Poista</translation>
    </message>
    <message>
      <source>Non Breaking Space</source>
      <translation>Sitova välilyönti</translation>
    </message>
    <message>
      <source>Hide Images</source>
      <translation>Piilota kuvat</translation>
    </message>
    <message>
      <source>Hungarian</source>
      <translation>unkari</translation>
    </message>
    <message>
      <source>French</source>
      <translation>ranska</translation>
    </message>
    <message>
      <source>German</source>
      <translation>saksa</translation>
    </message>
    <message>
      <source>Lock/Unlock</source>
      <translation>Lukitse/vapauta</translation>
    </message>
    <message>
      <source>Invert</source>
      <translation>Käännä</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>Ei mitään</translation>
    </message>
    <message>
      <source>Show Layers</source>
      <translation>Näytä tasot</translation>
    </message>
    <message>
      <source>Polish</source>
      <translation>puola</translation>
    </message>
    <message>
      <source>Loading:</source>
      <translation>Ladataan:</translation>
    </message>
    <message>
      <source>Documents (*.sla *.scd);;All Files (*)</source>
      <translation>Asiakirjat (*.sla *.scd);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Slovak</source>
      <translation>slovakki</translation>
    </message>
    <message>
      <source>Document</source>
      <translation>Asiakirja</translation>
    </message>
    <message>
      <source>X-Pos:</source>
      <translation>X:</translation>
    </message>
    <message>
      <source>Y-Pos:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <source>Unlock</source>
      <translation>Vapauta</translation>
    </message>
    <message>
      <source>Fonts...</source>
      <translation>Kirjaintyypit...</translation>
    </message>
    <message>
      <source>Open...</source>
      <translation>Avaa...</translation>
    </message>
    <message>
      <source>Show Grid</source>
      <translation>Näytä ruudukko</translation>
    </message>
    <message>
      <source>Outline</source>
      <translation>Rakenne</translation>
    </message>
    <message>
      <source>Properties</source>
      <translation>Ominaisuudet</translation>
    </message>
    <message>
      <source>Duplicate</source>
      <translation>Kopioi</translation>
    </message>
    <message>
      <source>Hide Margins</source>
      <translation>Piilota reunukset</translation>
    </message>
    <message>
      <source>Save as...</source>
      <translation>Tallenna nimellä...</translation>
    </message>
    <message>
      <source>Get Picture...</source>
      <translation>Hae kuva...</translation>
    </message>
    <message>
      <source>Attach Text to Path</source>
      <translation>Kiinnitä teksti polkuun</translation>
    </message>
    <message>
      <source>Insert Page Number</source>
      <translation>Lisää sivunumero</translation>
    </message>
    <message>
      <source>Bring to Front</source>
      <translation>Tuo päällimmäiseksi</translation>
    </message>
    <message>
      <source>Adjusting Colors</source>
      <translation>Värien säätäminen</translation>
    </message>
    <message>
      <source>Manage Guides...</source>
      <translation>Apuviivojen hallinta...</translation>
    </message>
    <message>
      <source>Ukrainian</source>
      <translation>ukraina</translation>
    </message>
    <message>
      <source>Scrapbook</source>
      <translation>Leikekirja</translation>
    </message>
    <message>
      <source>Reading Scrapbook</source>
      <translation>Luetaan leikekirjaa</translation>
    </message>
    <message>
      <source>Document Setup...</source>
      <translation>Asiakirjan asettelu...</translation>
    </message>
    <message>
      <source>Fit in Window</source>
      <translation>Sovita ikkunaan</translation>
    </message>
    <message>
      <source>Print...</source>
      <translation>Tulosta...</translation>
    </message>
    <message>
      <source>About Qt</source>
      <translation>Tietoja Qt:stä</translation>
    </message>
    <message>
      <source>Get Text/Picture...</source>
      <translation>Hae teksti/kuva...</translation>
    </message>
    <message>
      <source>Catalan</source>
      <translation>katalonia</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>Tallenna nimellä</translation>
    </message>
    <message>
      <source>Apply Template...</source>
      <translation>Käytä sivumallia...</translation>
    </message>
    <message>
      <source>Subscript</source>
      <translation>Alaindeksi</translation>
    </message>
    <message>
      <source>Superscript</source>
      <translation>Yläindeksi</translation>
    </message>
    <message>
      <source>Insert...</source>
      <translation>Uusi...</translation>
    </message>
    <message>
      <source>Russian</source>
      <translation>venäjä</translation>
    </message>
    <message>
      <source>Printing failed!</source>
      <translation>Tulostus epäonnistui!</translation>
    </message>
    <message>
      <source>Hyphenate Text</source>
      <translation>Tavuta teksti</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
      <translation>Asiakirjat (*.sla *.sla.gz *.scd *scd.gz);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Spanish</source>
      <translation>espanja</translation>
    </message>
    <message>
      <source>Scribus crashes due to Signal #%1</source>
      <translation>Scribus kaatui: Signal #%1</translation>
    </message>
    <message>
      <source>Get Text...</source>
      <translation>Hae teksti...</translation>
    </message>
    <message>
      <source>Printing...</source>
      <translation>Tulostaa...</translation>
    </message>
    <message>
      <source>Underline</source>
      <translation>Alleviivattu</translation>
    </message>
    <message>
      <source>Loading...</source>
      <translation>Ladataan...</translation>
    </message>
    <message>
      <source>Text Files (*.txt);;All Files(*)</source>
      <translation>Tekstitiedostot (*.txt);;Kaikki tiedostot(*)</translation>
    </message>
    <message>
      <source>Choose a Directory</source>
      <translation>Valitse hakemisto</translation>
    </message>
    <message>
      <source>Online-Help...</source>
      <translation>Ohje verkossa...</translation>
    </message>
    <message>
      <source>Select all</source>
      <translation>Valitse kaikki</translation>
    </message>
    <message>
      <source>Portuguese</source>
      <translation>portugali</translation>
    </message>
    <message>
      <source>Manage Pictures</source>
      <translation>Kuvien hallinta</translation>
    </message>
    <message>
      <source>English</source>
      <translation>englanti</translation>
    </message>
    <message>
      <source>Outlined</source>
      <translation>Ääriviivoin rajattu</translation>
    </message>
    <message>
      <source>Scribus Crash</source>
      <translation>Scribus kaatuu</translation>
    </message>
    <message>
      <source>Templates...</source>
      <translation>Sivumallit...</translation>
    </message>
    <message>
      <source>Saving...</source>
      <translation>Tallentaa...</translation>
    </message>
    <message>
      <source>Reading Preferences</source>
      <translation>Luetaan asetuksia</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>Setting up Shortcuts</source>
      <translation>Laaditaan oikopolkuja</translation>
    </message>
    <message>
      <source>Fatal Error</source>
      <translation>Vakava virhe</translation>
    </message>
    <message>
      <source>Align Left</source>
      <translation>Tasaa vasemmalle</translation>
    </message>
    <message>
      <source>Select New Font</source>
      <translation>Valitse uusi kirjaintyyppi</translation>
    </message>
    <message>
      <source>About Scribus</source>
      <translation>Tietoja Scribuksesta</translation>
    </message>
    <message>
      <source>Init Hyphenator</source>
      <translation>Alustetaan tavutus</translation>
    </message>
    <message>
      <source>Can't write the File: 
%1</source>
      <translation>Ei voi kirjoittaa tiedostoa
%1</translation>
    </message>
    <message>
      <source>Scribus Manual</source>
      <translation>Scribus ohje</translation>
    </message>
    <message>
      <source>All Files (*)</source>
      <translation>Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Finnish</source>
      <translation>suomi</translation>
    </message>
    <message>
      <source>Irish</source>
      <translation>irlanti</translation>
    </message>
    <message>
      <source>All Supported Formats</source>
      <translation>Kaikki tuetut tiedostotyypit</translation>
    </message>
    <message>
      <source>Create a new Document</source>
      <translation>Luo uusi asiakirja</translation>
    </message>
    <message>
      <source>Open a Document</source>
      <translation>Avaa asiakirja</translation>
    </message>
    <message>
      <source>Save the current Document</source>
      <translation>Tallenna asiakirja</translation>
    </message>
    <message>
      <source>Close the current Document</source>
      <translation>Sulje asiakirja</translation>
    </message>
    <message>
      <source>Print the current Document</source>
      <translation>Tulosta asiakirja</translation>
    </message>
    <message>
      <source>Save the current Document as PDF</source>
      <translation>Tallenna asiakirja PDF:nä</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>&amp;Tiedosto</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>&amp;Muokkaa</translation>
    </message>
    <message>
      <source>&amp;View</source>
      <translation>&amp;Näytä</translation>
    </message>
    <message>
      <source>&amp;Tools</source>
      <translation>Työ&amp;kalut</translation>
    </message>
    <message>
      <source>&amp;Windows</source>
      <translation>&amp;Ikkuna</translation>
    </message>
    <message>
      <source>&amp;Help</source>
      <translation>&amp;Ohje</translation>
    </message>
    <message>
      <source>&amp;Item</source>
      <translation>Ko&amp;hde</translation>
    </message>
    <message>
      <source>&amp;Page</source>
      <translation>&amp;Sivu</translation>
    </message>
    <message>
      <source>E&amp;xtras</source>
      <translation>&amp;Apuvälineet</translation>
    </message>
    <message>
      <source>Some Objects are locked.</source>
      <translation>Jotkin kohteet ovat lukittuina.</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
    <message>
      <source>Lock all</source>
      <translation>Lukitse kaikki</translation>
    </message>
    <message>
      <source>Unlock all</source>
      <translation>Vapauta kaikki</translation>
    </message>
    <message>
      <source>Show Baseline Grid</source>
      <translation>Näytä peruslinja</translation>
    </message>
    <message>
      <source>Hide Baseline Grid</source>
      <translation>Piilota peruslinja</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
    <message>
      <source>pt</source>
      <translation>pt</translation>
    </message>
    <message>
      <source>mm</source>
      <translation>mm</translation>
    </message>
    <message>
      <source>in</source>
      <translation>in</translation>
    </message>
    <message>
      <source>p</source>
      <translation>p</translation>
    </message>
    <message>
      <source>Lithuanian</source>
      <translation>liettua</translation>
    </message>
    <message>
      <source>Swedish</source>
      <translation>ruotsi</translation>
    </message>
    <message>
      <source>Slovenian</source>
      <translation>slovenia</translation>
    </message>
    <message>
      <source>&amp;Settings</source>
      <translation>As&amp;etukset</translation>
    </message>
    <message>
      <source>&amp;Color Management...</source>
      <translation>&amp;Värien hallinta...</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>&amp;Uusi</translation>
    </message>
    <message>
      <source>&amp;Open...</source>
      <translation>&amp;Avaa...</translation>
    </message>
    <message>
      <source>Open &amp;Recent</source>
      <translation>Avaa &amp;viimeaikainen</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>Su&amp;lje</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>&amp;Tallenna</translation>
    </message>
    <message>
      <source>Save &amp;As...</source>
      <translation>Tallenna &amp;nimellä...</translation>
    </message>
    <message>
      <source>Re&amp;vert to Saved</source>
      <translation>&amp;Palauta tallennettu</translation>
    </message>
    <message>
      <source>Collect for O&amp;utput...</source>
      <translation>&amp;Kerää vientiä varten...</translation>
    </message>
    <message>
      <source>&amp;Get Text/Picture...</source>
      <translation>&amp;Hae teksti/kuva...</translation>
    </message>
    <message>
      <source>Append &amp;Text...</source>
      <translation>Jatka &amp;tekstiä...</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation>T&amp;uo</translation>
    </message>
    <message>
      <source>Save &amp;Text...</source>
      <translation>Tallenna &amp;teksti...</translation>
    </message>
    <message>
      <source>Save Page as &amp;EPS...</source>
      <translation>Tallenna sivu &amp;EPS:nä...</translation>
    </message>
    <message>
      <source>Save as P&amp;DF...</source>
      <translation>Tallenna P&amp;DF:na...</translation>
    </message>
    <message>
      <source>&amp;Export</source>
      <translation>&amp;Vie</translation>
    </message>
    <message>
      <source>Document &amp;Setup...</source>
      <translation>A&amp;siakirjan asettelu...</translation>
    </message>
    <message>
      <source>&amp;Print...</source>
      <translation>T&amp;ulosta...</translation>
    </message>
    <message>
      <source>&amp;Quit</source>
      <translation>&amp;Lopeta</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>&amp;Kumoa</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>&amp;Leikkaa</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>&amp;Kopioi</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>L&amp;iitä</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>&amp;Tyhjennä</translation>
    </message>
    <message>
      <source>Select &amp;All</source>
      <translation>V&amp;alitse kaikki</translation>
    </message>
    <message>
      <source>&amp;Search/Replace...</source>
      <translation>Et&amp;si/Korvaa...</translation>
    </message>
    <message>
      <source>C&amp;olors...</source>
      <translation>&amp;Värit...</translation>
    </message>
    <message>
      <source>&amp;Paragraph Styles...</source>
      <translation>Ka&amp;ppaletyylit...</translation>
    </message>
    <message>
      <source>&amp;Line Styles...</source>
      <translation>Viivatyy&amp;lit...</translation>
    </message>
    <message>
      <source>&amp;Templates...</source>
      <translation>Sivumalli&amp;t...</translation>
    </message>
    <message>
      <source>D&amp;uplicate</source>
      <translation>&amp;Kopioi</translation>
    </message>
    <message>
      <source>&amp;Multiple Duplicate</source>
      <translation>&amp;Useita kopioita</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>&amp;Poista</translation>
    </message>
    <message>
      <source>&amp;Group</source>
      <translation>&amp;Ryhmitä</translation>
    </message>
    <message>
      <source>&amp;Ungroup</source>
      <translation>Pur&amp;a ryhmitys</translation>
    </message>
    <message>
      <source>&amp;Lock</source>
      <translation>&amp;Lukitse</translation>
    </message>
    <message>
      <source>Send to &amp;Back</source>
      <translation>Vie &amp;alimmaiseksi</translation>
    </message>
    <message>
      <source>Bring to &amp;Front</source>
      <translation>Tuo &amp;päällimmäiseksi</translation>
    </message>
    <message>
      <source>&amp;Lower</source>
      <translation>Vie a&amp;laspäin</translation>
    </message>
    <message>
      <source>&amp;Raise</source>
      <translation>&amp;Tuo ylöspäin</translation>
    </message>
    <message>
      <source>Distribute/&amp;Align...</source>
      <translation>J&amp;aa/Tasaa...</translation>
    </message>
    <message>
      <source>&amp;Shape</source>
      <translation>Ku&amp;vio</translation>
    </message>
    <message>
      <source>&amp;Attach Text to Path</source>
      <translation>K&amp;iinnitä teksti polkuun</translation>
    </message>
    <message>
      <source>&amp;Detach Text from Path</source>
      <translation>Poi&amp;sta teksti polulta</translation>
    </message>
    <message>
      <source>&amp;Combine Polygons</source>
      <translation>Y&amp;hdistä monikulmiot</translation>
    </message>
    <message>
      <source>Split &amp;Polygons</source>
      <translation>&amp;Erota monikulmiot</translation>
    </message>
    <message>
      <source>C&amp;onvert to Outlines</source>
      <translation>&amp;Muuta ääriviivoiksi</translation>
    </message>
    <message>
      <source>&amp;Insert...</source>
      <translation>&amp;Lisää...</translation>
    </message>
    <message>
      <source>&amp;Delete...</source>
      <translation>&amp;Poista...</translation>
    </message>
    <message>
      <source>&amp;Move...</source>
      <translation>&amp;Siirrä...</translation>
    </message>
    <message>
      <source>&amp;Apply Template...</source>
      <translation>K&amp;äytä sivumallia...</translation>
    </message>
    <message>
      <source>&amp;Fit in Window</source>
      <translation>&amp;Sovita ikkunaan</translation>
    </message>
    <message>
      <source>&amp;100%</source>
      <translation>&amp;100 %</translation>
    </message>
    <message>
      <source>&amp;Thumbnails</source>
      <translation>&amp;Esikatselukuvat</translation>
    </message>
    <message>
      <source>Show &amp;Grid</source>
      <translation>Näytä ruu&amp;dukko</translation>
    </message>
    <message>
      <source>Sna&amp;p to Guides</source>
      <translation>Kiinnitä a&amp;puviivoihin</translation>
    </message>
    <message>
      <source>Show &amp;Baseline Grid</source>
      <translation>Näytä p&amp;eruslinja</translation>
    </message>
    <message>
      <source>&amp;Properties</source>
      <translation>&amp;Ominaisuudet</translation>
    </message>
    <message>
      <source>&amp;Outline</source>
      <translation>&amp;Rakenne</translation>
    </message>
    <message>
      <source>&amp;Scrapbook</source>
      <translation>&amp;Leikekirja</translation>
    </message>
    <message>
      <source>&amp;Layers</source>
      <translation>&amp;Tasot</translation>
    </message>
    <message>
      <source>P&amp;age Palette</source>
      <translation>&amp;Sivujen hallinta</translation>
    </message>
    <message>
      <source>&amp;Bookmarks</source>
      <translation>&amp;Kirjanmerkit</translation>
    </message>
    <message>
      <source>&amp;Manage Pictures</source>
      <translation>&amp;Kuvien hallinta</translation>
    </message>
    <message>
      <source>&amp;Hyphenate Text</source>
      <translation>&amp;Tavuta teksti</translation>
    </message>
    <message>
      <source>Toolti&amp;ps</source>
      <translation>&amp;Työkaluvihjeet</translation>
    </message>
    <message>
      <source>P&amp;DF Tools</source>
      <translation>&amp;PDF-työkalut</translation>
    </message>
    <message>
      <source>Tooltips</source>
      <translation>Työkaluvihjeet</translation>
    </message>
    <message>
      <source>&amp;Fonts...</source>
      <translation>K&amp;irjaintyypit...</translation>
    </message>
    <message>
      <source>&amp;Hyphenator...</source>
      <translation>Ta&amp;vuttaja...</translation>
    </message>
    <message>
      <source>&amp;Keyboard Shortcuts...</source>
      <translation>&amp;Näppäinoikopolut...</translation>
    </message>
    <message>
      <source>&amp;About Scribus</source>
      <translation>&amp;Tietoja Scribuksesta</translation>
    </message>
    <message>
      <source>About &amp;Qt</source>
      <translation>Tietoja &amp;Qt:sta</translation>
    </message>
    <message>
      <source>Scribus &amp;Manual...</source>
      <translation>Scribus &amp;ohje...</translation>
    </message>
    <message>
      <source>St&amp;yle</source>
      <translation>T&amp;yyli</translation>
    </message>
    <message>
      <source>&amp;Left</source>
      <translation>&amp;Vasen</translation>
    </message>
    <message>
      <source>&amp;Center</source>
      <translation>&amp;Keskitetty</translation>
    </message>
    <message>
      <source>&amp;Right</source>
      <translation>&amp;Oikea</translation>
    </message>
    <message>
      <source>&amp;Block</source>
      <translation>&amp;Molemmat reunat</translation>
    </message>
    <message>
      <source>&amp;Forced</source>
      <translation>&amp;Pakotettu</translation>
    </message>
    <message>
      <source>&amp;Other...</source>
      <translation>M&amp;uu...</translation>
    </message>
    <message>
      <source>&amp;Cascade</source>
      <translation>&amp;Lomittain</translation>
    </message>
    <message>
      <source>&amp;Tile</source>
      <translation>&amp;Vierekkäin</translation>
    </message>
    <message>
      <source>&amp;Color</source>
      <translation>&amp;Väri</translation>
    </message>
    <message>
      <source>&amp;Invert</source>
      <translation>&amp;Käännä</translation>
    </message>
    <message>
      <source>&amp;Get Text...</source>
      <translation>&amp;Hae teksti...</translation>
    </message>
    <message>
      <source>&amp;Font</source>
      <translation>&amp;Kirjaintyyppi</translation>
    </message>
    <message>
      <source>&amp;Size</source>
      <translation>&amp;Koko</translation>
    </message>
    <message>
      <source>&amp;Effects</source>
      <translation>&amp;Tehosteet</translation>
    </message>
    <message>
      <source>&amp;Alignment</source>
      <translation>T&amp;asaus</translation>
    </message>
    <message>
      <source>&amp;Shade</source>
      <translation>&amp;Sävy</translation>
    </message>
    <message>
      <source>&amp;Tabulators...</source>
      <translation>&amp;Sarkaimet...</translation>
    </message>
    <message>
      <source>Un&amp;lock</source>
      <translation>&amp;Vapauta</translation>
    </message>
    <message>
      <source>Show &amp;Images</source>
      <translation>Näytä &amp;kuvat</translation>
    </message>
    <message>
      <source>Show &amp;Margins</source>
      <translation>Näytä &amp;reunukset</translation>
    </message>
    <message>
      <source>Show &amp;Frames</source>
      <translation>Näytä &amp;kehykset</translation>
    </message>
    <message>
      <source>Show G&amp;uides</source>
      <translation>Näytä &amp;apuviivat</translation>
    </message>
    <message>
      <source>Import &amp;Page(s)...</source>
      <translation>Tuo s&amp;ivu(ja)...</translation>
    </message>
    <message>
      <source>Importing Pages...</source>
      <translation>Tuodaan sivuja...</translation>
    </message>
    <message>
      <source>Import Page(s)</source>
      <translation>Tuo sivu(t)</translation>
    </message>
    <message>
      <source>Create</source>
      <translation>Luo</translation>
    </message>
    <message>
      <source>Import</source>
      <translation>Tuo</translation>
    </message>
    <message>
      <source>&lt;p>You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p>Choose one of the following:&lt;br>&lt;ul>&lt;li>&lt;b>Create&lt;/b> missing pages&lt;/li>&lt;li>&lt;b>Import&lt;/b> pages until the last page&lt;/li>&lt;li>&lt;b>Cancel&lt;/b>&lt;/li>&lt;/ul>&lt;br></source>
      <translation>&lt;p>Yrität tuoda enemmän sivuja kuin kohdeasiakirjassa on jäljellä laskien aktiivisesta sivusta.&lt;/p>Valitse yksi seuraavista:&lt;br>&lt;ul>&lt;li>&lt;b>Luo&lt;/b> puuttuvat sivut&lt;/li>&lt;li>&lt;b>Tuo&lt;/b> sivut asiakirjan loppuun saakka&lt;/li>&lt;li>&lt;b>Peruuta&lt;/b>&lt;/li>&lt;/ul>&lt;br></translation>
    </message>
    <message>
      <source>Import done</source>
      <translation>Tuonti tehty</translation>
    </message>
    <message>
      <source>Found nothing to import</source>
      <translation>Tuotavaa ei löytynyt</translation>
    </message>
    <message>
      <source>100%</source>
      <translation>100%</translation>
    </message>
    <message>
      <source>Sn&amp;ap to Grid</source>
      <translation>Kiinnitä r&amp;uudukkoon</translation>
    </message>
    <message>
      <source>P&amp;references...</source>
      <translation>&amp;Asetukset...</translation>
    </message>
    <message>
      <source>Getting ICC Profiles</source>
      <translation>Haetaan ICC-profiileja</translation>
    </message>
    <message>
      <source>Manage &amp;Guides...</source>
      <translation>&amp;Apuviivojen hallinta...</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>&amp;Koko:</translation>
    </message>
    <message>
      <source>&amp;Shade:</source>
      <translation>&amp;Sävy:</translation>
    </message>
    <message>
      <source>&amp;Undo Delete Object</source>
      <translation>&amp;Peruuta kohteen poisto</translation>
    </message>
    <message>
      <source>&amp;Undo Object Move</source>
      <translation>&amp;Peruuta kohteen siirto</translation>
    </message>
    <message>
      <source>&amp;Undo Object Change</source>
      <translation>&amp;Peruuta kohteen muokkaus</translation>
    </message>
    <message>
      <source>Document &amp;Information...</source>
      <translation>Asiakirjan t&amp;iedot...</translation>
    </message>
    <message>
      <source>&amp;Edit Shape</source>
      <translation>&amp;Muokkaa kuviota</translation>
    </message>
    <message>
      <source>File %1 is not in Scribus format</source>
      <translation>Tiedosto %1 ei ole Scribus-muodossa</translation>
    </message>
    <message>
      <source>Afrikaans</source>
      <translation>afrikaans</translation>
    </message>
    <message>
      <source>Font System Initialized</source>
      <translation>Kirjaintyypit alustettu</translation>
    </message>
    <message>
      <source>Portuguese (BR)</source>
      <translation>portugali (BR)</translation>
    </message>
    <message>
      <source>There are no suitable Fonts on your System</source>
      <translation>Järjestelmästä ei löytynyt sopivia kirjaintyyppejä</translation>
    </message>
    <message>
      <source>&lt;qt>Color management is supported but can not currently be enabled. Make sure you have ICC color profiles installed and that the profile path in the preferences points to where they're installed.&lt;/qt></source>
      <translation>&lt;qt>Värienhallinta on tuettu mutta sitä ei voida käyttää tällä hetkellä. Varmista, että ICC-väriprofiilit ovat asennettuna ja että hakemistopolku näihin on asetettu oikein.&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;qt>Color management is not supported by this Scribus build (not compiled in).&lt;/qt></source>
      <translation>&lt;qt>Värienhallinta ei ole tuettuna tässä Scribuksen käännöksessä.&lt;/qt></translation>
    </message>
    <message>
      <source>Croatian</source>
      <translation>kroatia</translation>
    </message>
    <message>
      <source>JavaScripts...</source>
      <translation>JavaScriptit...</translation>
    </message>
    <message>
      <source>&amp;JavaScripts...</source>
      <translation>&amp;JavaScriptit...</translation>
    </message>
    <message>
      <source>GhostScript : You cannot use EPS Images</source>
      <translation>Ghostscript: Et voi käyttää EPS-kuvia</translation>
    </message>
    <message>
      <source>EPS Files (*.eps);;All Files (*)</source>
      <translation>EPS-tiedostot (*.eps);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Norwegian</source>
      <translation>norja</translation>
    </message>
    <message>
      <source>Icelandic</source>
      <translation>islanti</translation>
    </message>
  </context>
  <context>
    <name>ScribusView</name>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>All</source>
      <translation>Kaikki</translation>
    </message>
    <message>
      <source>Layer</source>
      <translation>Taso</translation>
    </message>
    <message>
      <source>pt</source>
      <translation>pt</translation>
    </message>
    <message>
      <source>mm</source>
      <translation>mm</translation>
    </message>
    <message>
      <source>in</source>
      <translation>in</translation>
    </message>
    <message>
      <source>p</source>
      <translation>p</translation>
    </message>
    <message>
      <source>Copy of</source>
      <translation>Kopio</translation>
    </message>
  </context>
  <context>
    <name>ScribusWin</name>
    <message>
      <source>has been changed since the last save.</source>
      <translation>on muuttunut tallennuksen jälkeen.</translation>
    </message>
    <message>
      <source>Document:</source>
      <translation>Asiakirja:</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>&amp;Leave Anyway</source>
      <translation>P&amp;oistu</translation>
    </message>
    <message>
      <source>C&amp;lose Anyway</source>
      <translation>&amp;Sulje</translation>
    </message>
    <message>
      <source>&amp;Save Now</source>
      <translation>&amp;Tallenna nyt</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>ScripterCore</name>
    <message>
      <source>&amp;Scribus Scripts</source>
      <translation>&amp;Scribus skriptit</translation>
    </message>
    <message>
      <source>&amp;Execute Script...</source>
      <translation>&amp;Aja skripti...</translation>
    </message>
    <message>
      <source>Run a Python script from a file.</source>
      <comment>scripter</comment>
      <translation>Aja Python-skripti tiedostosta.</translation>
    </message>
    <message>
      <source>&amp;Load Extension Script...</source>
      <translation>&amp;Lataa laajennusskripti...</translation>
    </message>
    <message>
      <source>Load a Python script as an extension. Used for loading macros and for advanced Python scripts that extend the Scribus user interface.</source>
      <comment>scripter</comment>
      <translation>Lataa Python-skripti laajennuksena. Tätä käytetään makroissa sekä muissa kehittyneissä Python-skripteissä, jotka laajentavat Scribuksen käyttöliittymää.</translation>
    </message>
    <message>
      <source>&amp;Recent Scripts</source>
      <translation>Vii&amp;meaikaiset skriptit</translation>
    </message>
    <message>
      <source>Show &amp;Console</source>
      <translation>Näytä &amp;konsoli</translation>
    </message>
    <message>
      <source>Display an interactive Python console where you can write and run Python programs that use the Scripter tools.</source>
      <comment>scripter</comment>
      <translation>Näytä interaktiivinen Python-konsoli, jossa voit ajaa Python-ohjelmia, jotka käyttävät skripteriä.</translation>
    </message>
    <message>
      <source>&amp;About Script...</source>
      <translation>&amp;Tietoja skriptistä...</translation>
    </message>
    <message>
      <source>S&amp;cript</source>
      <translation>Sk&amp;riptit</translation>
    </message>
    <message>
      <source>Scripter &amp;Settings</source>
      <comment>script menu</comment>
      <translation>Skripterin &amp;asetukset</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>Avaa</translation>
    </message>
    <message>
      <source>Python Scripts (*.py);; All Files (*)</source>
      <translation>Python skriptit (*.py);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Script error</source>
      <translation>Skriptivirhe</translation>
    </message>
    <message>
      <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;>bugs.scribus.net&lt;/a> please.</source>
      <translation>Jos ajat ohjelman mukana toimitettua skriptiä ilmoita siitä &lt;a href=&quot;http://bugs.scribus.net&quot;>bugs.scribus.net&lt;/a>. Kiitos.</translation>
    </message>
    <message>
      <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
      <translation>Tämä viesti on myös leikepöydälläsi. Voit liittää sen virheilmoitukseesi näppäinyhdistelmällä CTRL+V.</translation>
    </message>
    <message>
      <source>Scribus - Script Plugin</source>
      <translation>Scribus - Skriptilaajennus</translation>
    </message>
    <message>
      <source>The 'Load Script' function of the script plugin is currently disabled.
If you just want to run a normal script, you probably want to use
'Execute Script...' instead.

If you do actually want to load a Python extension script or macro, you
need to go into the Scripter Settings in the Script menu and enable
scripter extensions there.

Please read the documentation on extension scripts first.
</source>
      <translation>'Lataa skripti'-toiminto on poissa käytöstä. Jos haluat ainoastaan
suorittaa normaalin skriptin, tämä onnistuu käyttämällä 'Aja skripti':ä

Jos haluat ladata Python-laajennusskriptin tai makron, täytyy skripterin
asetuksista asettaa laajennukset käyttöön.

Lue laajennusskriptien dokumentaatio ensin.</translation>
    </message>
    <message>
      <source>Hide &amp;Console</source>
      <translation>Piilota &amp;Konsoli</translation>
    </message>
    <message>
      <source>About Script</source>
      <translation>Tietoja skriptistä</translation>
    </message>
  </context>
  <context>
    <name>ScripterPreferences</name>
    <message>
      <source>Scribus - Scripter Preferences</source>
      <translation>Scribus - Skripterin asetukset</translation>
    </message>
    <message>
      <source>Enable Scripter Extensions</source>
      <translation>Käytä skripterin laajennuksia</translation>
    </message>
    <message>
      <source>Turn on extension scripts and macros</source>
      <translation>Salli laajennusskriptit ja makrot</translation>
    </message>
    <message>
      <source>&lt;qt>&lt;p>Enabling scripter extensions turns on additional scripter functionality including Python macros and the option of loading a Python script at start-up. Turning on this option unlocks the &lt;tt>Load Extension Script&lt;/tt> item in the Script menu.&lt;/p>
&lt;p>
Only scripts written to be run as extension scripts should be used with &lt;tt>Load Extension Script&lt;/tt> or as start-up scripts. See the scripter documentation for more details.&lt;/p>&lt;/qt></source>
      <translation>&lt;qt>&lt;p>Laajennusskriptin käyttö mahdollistaa skripterin edistyneet ominaisuudet kuten Python-makrot ja mahdollisuuden ladata käynnistysskripti. Valitsemalla tämän ominaisuuden vapautat &lt;tt>Lataa laajennusskripti&lt;/tt> kohdan käytettäväksi &quot;Skripti&quot;-valikossa.&lt;/p>
&lt;p>Ainoastaan laajennusskripteiksi suunniteltuja skriptejä tulisi käyttää käynnistysskripteinä tai &lt;tt>Lataa laajennusskripti&lt;/tt>-ominaisuuden kanssa. Asiasta lisää skripterin dokumentaatiossa.&lt;/p>&lt;/qt></translation>
    </message>
    <message>
      <source>Use a Startup Script</source>
      <translation>Käytä käynnistysskriptiä</translation>
    </message>
    <message>
      <source>&lt;qt>&lt;p>If &lt;tt>Use a Startup Script&lt;/tt> is checked, Scribus will load the script file specified here as an extension script at start-up. It is important that the script be written as an extension script, as if not written carefully it can potentially cause problems.&lt;/p>
&lt;p>&lt;tt>Use a Startup Script&lt;/tt> will be disabled if scripter extensions are off, as extension scripts cannot be loaded without scripter extensions enabled.&lt;/p>&lt;/qt></source>
      <translation>&lt;qt>&lt;p>Jos &lt;tt>Käytä käynnistysskriptiä&lt;/tt> on käytössä, Scribus lataa laajennusskriptitiedoston käynnistyksen yhteydessä. On tärkeää, että käytettävä skripti on suunniteltu tätä käyttöä varten. Muussa tapauksessa ohjelman käytössä saattaa esiintyä ongelmia.&lt;/p>
&lt;p>&lt;tt>Käytä käynnistysskriptiä&lt;/tt> ei ole käytettävissä, jos skripterin laajennukset ovat poissa käytöstä.&lt;/p>&lt;/qt></translation>
    </message>
    <message>
      <source>Browse...</source>
      <translation>Etsi...</translation>
    </message>
    <message>
      <source>Browse for a new script file</source>
      <translation>Etsi uusi skriptitiedosto</translation>
    </message>
    <message>
      <source>&lt;qt>Browse for a new script file&lt;/qt></source>
      <translation>&lt;qt>Etsi skriptitiedosto&lt;/qt></translation>
    </message>
    <message>
      <source>What script file to load at start-up</source>
      <translation>Mikä skriptitiedosto ladataan käynnistyksessä</translation>
    </message>
    <message>
      <source>&lt;qt>&lt;p>The file containing the Python script to run as an extension script at start-up.&lt;/p>
&lt;p>Note that when this script is run, Scribus has not completely started up and the workspace does not yet exist.&lt;/p>&lt;/qt></source>
      <translation>&lt;qt>&lt;p>Tiedosto, joka sisältää Python-skriptin ajettavaksi käynnistysskriptinä.&lt;/p>
&lt;p>Huomaa että tätä skriptiä ajettaessa Scribus ei vielä ole täysin valmiina ja työskentelyaluetta ei vielä ole olemassa&lt;/p>&lt;/qt></translation>
    </message>
    <message>
      <source>Script File:</source>
      <translation>Skriptitiedosto:</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>Close without saving changes</source>
      <translation>Sulje tallentamatta muutoksia</translation>
    </message>
    <message>
      <source>&amp;Ok</source>
      <translation>&amp;Ok</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>Save changes and close</source>
      <translation>Tallenna muutokset ja poistu</translation>
    </message>
    <message>
      <source>Advanced Options</source>
      <translation>Lisäasetukset</translation>
    </message>
    <message>
      <source>Import All Names at Startup</source>
      <translation>Tuo kaikki nimet käynnistettäessä</translation>
    </message>
    <message>
      <source>Run 'from scribus import *' in the script console at start-up</source>
      <translation>Aja 'from scribus import *' skripterin konsolissa käynnistyksen yhteydessä</translation>
    </message>
    <message>
      <source>&lt;qt>&lt;p>&lt;tt>Import All Names at Startup&lt;/tt> is an advanced option. You should probably leave it checked unless you have read the documentation and know what you are doing.&lt;/p>
&lt;p>Unchecking this option will prevent the scripter from running its usual &lt;tt>from scribus import *&lt;/tt> command when it initializes the main interpreter (used for the script console and extension scripts) at start-up.&lt;/p>
&lt;p>This option does not take effect until Scribus is restarted.&lt;/p>&lt;/qt></source>
      <translation>&lt;qt>&lt;p>&lt;tt>Tuo kaikki nimet käynnistyksessä&lt;/tt> on erikoisominaisuus, joka tulisi jättää oletusarvoonsa. Tämän asetuksen muuttaminen vaatii runsasta tietoa sen käytöstä.&lt;/p>
&lt;p>Toiminnon käytöstä poistaminen estää skripterin ajamasta tavallisen &lt;tt>from scribus import *&lt;/tt> -komennon alustettaessa tulkkia.&lt;/p>
&lt;p>Muutos tulee voimaan Scribuksen uudelleenkäynnistyksen yhteydessä.&lt;/p>&lt;/qt></translation>
    </message>
    <message>
      <source>Enable Legacy Name Aliases</source>
      <translation>Käytä sovitettuja nimiä</translation>
    </message>
    <message>
      <source>&lt;qt>Enable the use of OldStyle function names&lt;/qt></source>
      <translation>&lt;qt>Käytä VanhanTyylisiä funktion nimiä&lt;/qt></translation>
    </message>
    <message>
      <source>Use Fake Stdin</source>
      <translation>Käytä simuloitua stdiniä</translation>
    </message>
    <message>
      <source>&lt;qt>Replace sys.stdin with a fake file to prevent Scribus hanging when a script tries to read from stdin.&lt;/qt></source>
      <translation>&lt;qt>Korvaa sys.stdin tiedostolla. Tämä estää Scribuksen lukkiutumisen, jos skripti yrittää lukea stdinistä.&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;qt>&lt;p>&lt;tt>Use Fake Stdin&lt;/tt> is an advanced option. You should probably leave it how it is.&lt;/p>
&lt;p>Normally, scribus will provide Python with a fake file object for &lt;tt>sys.stdin&lt;/tt>, so that reads from stdin always return an empty string. If the real &lt;tt>sys.stdin&lt;/tt> is left in place, scripts that try to read from it will block - and in turn block scribus's execution, making the app appear to hang - until input arrives on stdin. It's unusual for GUI apps to expect anything on stdin, so mostly users will think scribus has crashed.&lt;/p>
&lt;p>You can disable this option if you want to accept input on stdin. Generally you should use &lt;tt>os.popen&lt;/tt> to make a pipe instead, or use some other input mechanism, but this option is here just in case.&lt;/p>&lt;/qt></source>
      <translation>&lt;qt>&lt;p>&lt;tt>Käytä simuloitua stdiniä&lt;/tt> on edistynyt ominaisuus, joka tulisi jättää oletusarvoonsa.&lt;/p>
&lt;p>Oletuksena Scribus vie Pythonille tiedoston &lt;tt>sys.stdin&lt;/tt>:n käyttöön. Tämän johdosta lukeminen stdinistä palauttaa aina tyhjän stringin. Jos oikea &lt;tt>sys.stdin&lt;/tt> on käytössä, skriptit jotka yrittävät lukea siitä estävät ohjelman käytön kunnes stdin saa odottamansa syötteen.&lt;/p>
&lt;p>Voit poistaa ominaisuuden käytöstä mahdollistaaksesi oikean stdinin käytön. Yleensä olisi suositeltavaa käyttää &lt;tt>os.popen&lt;/tt>:a tai jotain muuta keinoa syötteen saamiseksi.&lt;/p>&lt;/qt></translation>
    </message>
    <message>
      <source>&lt;qt>&lt;p>&lt;tt>Enable Legacy Name Aliases&lt;/tt> is an advanced option. You should probably leave it how it is.&lt;/p>
&lt;p>If checked, this option will cause the scripter to create a large number of function and constant name aliases for 1.2.0 script compatibility. It defaults to checked.&lt;/p>
&lt;p>This option does not take effect until Scribus is restarted.&lt;/p>&lt;/qt></source>
      <translation>&lt;qt>&lt;p>&lt;tt>Käytä sovitettuja nimiä&lt;/tt> on ominaisuus, joka luultavimmin tulisi jättää oletusarvoonsa.&lt;/p> 
&lt;p>Valittuna ominaisuus luo laajan joukon funktio- ja muuttujanimiä säilyttääkseen 1.2.0 skripterin yhteensopivuuden. Oletusarvona valittu&lt;/p> 
&lt;p>Ominaisuuden muutos vaatii Scribuksen uudelleenkäynnistyksen.&lt;/p>&lt;/qt></translation>
    </message>
  </context>
  <context>
    <name>SeList</name>
    <message>
      <source>Show Page Previews</source>
      <translation>Näytä sivun esikatselu</translation>
    </message>
  </context>
  <context>
    <name>SeView</name>
    <message>
      <source>Show Template Names</source>
      <translation>Näytä sivumallien nimet</translation>
    </message>
  </context>
  <context>
    <name>SearchReplace</name>
    <message>
      <source>Search/Replace</source>
      <translation>Etsi/Korvaa</translation>
    </message>
    <message>
      <source>Search for:</source>
      <translation>Etsi:</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>Teksti</translation>
    </message>
    <message>
      <source>Paragraph Style</source>
      <translation>Kappaletyyli</translation>
    </message>
    <message>
      <source>Font</source>
      <translation>Kirjaintyyppi</translation>
    </message>
    <message>
      <source>Font Size</source>
      <translation>Kirjaintyypin koko</translation>
    </message>
    <message>
      <source>Font Effects</source>
      <translation>Kirjaintyyppien tehosteet</translation>
    </message>
    <message>
      <source>Fill Color</source>
      <translation>Täyttöväri</translation>
    </message>
    <message>
      <source>Stroke Color</source>
      <translation>Viivan väri</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>None</source>
      <translation>Ei mitään</translation>
    </message>
    <message>
      <source>Replace with:</source>
      <translation>Korvaa:</translation>
    </message>
    <message>
      <source>Search finished</source>
      <translation>Etsintä päättyi</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Fill Shade</source>
      <translation>Täytön sävy</translation>
    </message>
    <message>
      <source>Stroke Shade</source>
      <translation>Reunan sävy</translation>
    </message>
    <message>
      <source>Left</source>
      <translation>Vasen</translation>
    </message>
    <message>
      <source>Center</source>
      <translation>Keskitetty</translation>
    </message>
    <message>
      <source>Right</source>
      <translation>Oikea</translation>
    </message>
    <message>
      <source>Block</source>
      <translation>Molemmat reunat</translation>
    </message>
    <message>
      <source>Forced</source>
      <translation>Pakotettu</translation>
    </message>
    <message>
      <source>&amp;Whole Word</source>
      <translation>K&amp;okonainen sana</translation>
    </message>
    <message>
      <source>&amp;Ignore Case</source>
      <translation>&amp;Älä huomioi kokoa</translation>
    </message>
    <message>
      <source>&amp;Search</source>
      <translation>&amp;Etsi</translation>
    </message>
    <message>
      <source>&amp;Replace</source>
      <translation>&amp;Korvaa</translation>
    </message>
    <message>
      <source>Replace &amp;All</source>
      <translation>Ko&amp;rvaa kaikki</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>&amp;Sulje</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>&amp;Tyhjennä</translation>
    </message>
  </context>
  <context>
    <name>SeitenPal</name>
    <message>
      <source>Normal</source>
      <translation>Normal</translation>
    </message>
    <message>
      <source>Here are all your Templates, to create a new Page
drag a Template to the Pageview below.</source>
      <translation>Tässä on kaikki sivumallisi. Luodaksesi uuden sivun
raahaa malli sivualueelle.</translation>
    </message>
    <message>
      <source>Available Templates:</source>
      <translation>Sivumallit:</translation>
    </message>
    <message>
      <source>Left Page first</source>
      <translation>Vasen sivu ensin</translation>
    </message>
    <message>
      <source>Drag Pages or Template Pages onto the Trashbin to delete them.</source>
      <translation>Raahaa sivu tai sivumalli roskakoriin tuhotaksesi sen.</translation>
    </message>
    <message>
      <source>Facing Pages</source>
      <translation>Vastakkaiset sivut</translation>
    </message>
    <message>
      <source>Document Pages:</source>
      <translation>Asiakirjan sivut:</translation>
    </message>
    <message>
      <source>Arrange Pages</source>
      <translation>Sivujen hallinta</translation>
    </message>
    <message>
      <source>Previews all the pages of your document.</source>
      <translation>Esikatselu kaikista asiakirjasi sivuista.</translation>
    </message>
  </context>
  <context>
    <name>SelectFields</name>
    <message>
      <source>Available Fields</source>
      <translation>Mahdolliset kentät</translation>
    </message>
    <message>
      <source>Selected Fields</source>
      <translation>Valitut kentät</translation>
    </message>
    <message>
      <source>Select Fields</source>
      <translation>Valitse kentät</translation>
    </message>
    <message>
      <source>&amp;>></source>
      <translation>&amp;>></translation>
    </message>
    <message>
      <source>&amp;&lt;&lt;</source>
      <translation>&amp;&lt;&lt;</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>ShadeButton</name>
    <message>
      <source>Other...</source>
      <translation>Muu...</translation>
    </message>
    <message>
      <source>Shade</source>
      <translation>Sävy</translation>
    </message>
    <message>
      <source>&amp;Shade:</source>
      <translation>&amp;Sävy:</translation>
    </message>
  </context>
  <context>
    <name>SideBar</name>
    <message>
      <source>No Style</source>
      <translation>Ei tyyliä</translation>
    </message>
  </context>
  <context>
    <name>Spalette</name>
    <message>
      <source>No Style</source>
      <translation>Ei tyyliä</translation>
    </message>
  </context>
  <context>
    <name>StilFormate</name>
    <message>
      <source>No</source>
      <translation>Ei</translation>
    </message>
    <message>
      <source>Yes</source>
      <translation>Kyllä</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>Avaa</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
      <translation>Asiakirjat (*.sla *.sla.gz *.scd *.scd.gz);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Documents (*.sla *.scd);;All Files (*)</source>
      <translation>Asiakirjat (*.sla *.scd);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Edit Styles</source>
      <translation>Muokkaa tyylejä</translation>
    </message>
    <message>
      <source>New Style</source>
      <translation>Uusi tyyli</translation>
    </message>
    <message>
      <source>Copy of %1</source>
      <translation>Kopio-%1</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>&amp;Append</source>
      <translation>&amp;Tuo</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>&amp;Uusi</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>&amp;Muokkaa</translation>
    </message>
    <message>
      <source>D&amp;uplicate</source>
      <translation>&amp;Kopioi</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>P&amp;oista</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>&amp;Tallenna</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>Do you really want to delete this Style?</source>
      <translation>Haluatko poistaa tämän tyylin?</translation>
    </message>
  </context>
  <context>
    <name>StoryEditor</name>
    <message>
      <source>Do you really want to lose all your Changes?</source>
      <translation>Haluatko menettää kaikki tekemäsi muutokset?</translation>
    </message>
    <message>
      <source>Story Editor</source>
      <translation>Tekstieditori</translation>
    </message>
    <message>
      <source>Do you really want to clear all your Text?</source>
      <translation>Haluatko poistaa kaiken tekstin?</translation>
    </message>
    <message>
      <source>Current Paragraph:</source>
      <translation>Nykyinen kappale:</translation>
    </message>
    <message>
      <source>Chars: </source>
      <translation>Merkit: </translation>
    </message>
    <message>
      <source>Totals:</source>
      <translation>Yhteensä:</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>Paragraphs: </source>
      <translation>Kappaleet: </translation>
    </message>
    <message>
      <source>Words: </source>
      <translation>Sanat: </translation>
    </message>
    <message>
      <source>Open</source>
      <translation>Avaa</translation>
    </message>
    <message>
      <source>Text Files (*.txt);;All Files(*)</source>
      <translation>Tekstitiedostot (*.txt);;Kaikki tiedostot (*)</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>Tallenna nimellä</translation>
    </message>
    <message>
      <source>Do you want to save your changes?</source>
      <translation>Haluatko tallentaa muutokset?</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>&amp;Uusi</translation>
    </message>
    <message>
      <source>&amp;Reload Text from Frame</source>
      <translation>&amp;Lataa kehyksen teksti uudestaan</translation>
    </message>
    <message>
      <source>&amp;Save to File...</source>
      <translation>&amp;Tallenna tiedostoon...</translation>
    </message>
    <message>
      <source>&amp;Load from File...</source>
      <translation>&amp;Lataa tiedostosta...</translation>
    </message>
    <message>
      <source>Save &amp;Document</source>
      <translation>Tallenna &amp;asiakirja</translation>
    </message>
    <message>
      <source>&amp;Update Text Frame and Exit</source>
      <translation>&amp;Päivitä tekstikehys ja poistu</translation>
    </message>
    <message>
      <source>&amp;Exit Without Updating Text Frame</source>
      <translation>&amp;Poistu päivittämättä tekstikehystä</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>&amp;Leikkaa</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>&amp;Kopioi</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>L&amp;iitä</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>&amp;Tyhjennä</translation>
    </message>
    <message>
      <source>&amp;Insert Special...</source>
      <translation>&amp;Lisää erikoismerkki...</translation>
    </message>
    <message>
      <source>&amp;Update Text Frame</source>
      <translation>&amp;Päivitä tekstikehys</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>&amp;Tiedosto</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>&amp;Muokkaa</translation>
    </message>
    <message>
      <source>Select &amp;All</source>
      <translation>V&amp;alitse kaikki</translation>
    </message>
    <message>
      <source>File</source>
      <translation>Tiedosto</translation>
    </message>
    <message>
      <source>Load Text from File</source>
      <translation>Lataa teksti tiedostosta</translation>
    </message>
    <message>
      <source>Save Text to File</source>
      <translation>Tallenna teksti tiedostoon</translation>
    </message>
    <message>
      <source>Update Text Frame and Exit</source>
      <translation>Päivitä tekstikehys ja poistu</translation>
    </message>
    <message>
      <source>Exit Without Updating Text Frame</source>
      <translation>Poistu tallentamatta tekstikehystä</translation>
    </message>
    <message>
      <source>Reload Text from Frame</source>
      <translation>Lataa kehyksen teksti uudestaan</translation>
    </message>
    <message>
      <source>Update Text Frame</source>
      <translation>Päivitä tekstikehys</translation>
    </message>
    <message>
      <source>&amp;Edit Styles...</source>
      <translation>&amp;Muokkaa tyylejä...</translation>
    </message>
    <message>
      <source>&amp;Search/Replace...</source>
      <translation>Et&amp;si/Korvaa...</translation>
    </message>
    <message>
      <source>&amp;Background...</source>
      <translation>&amp;Tausta...</translation>
    </message>
    <message>
      <source>&amp;Display Font...</source>
      <translation>&amp;Käytettävä kirjaintyyppi...</translation>
    </message>
    <message>
      <source>&amp;Settings</source>
      <translation>As&amp;etukset</translation>
    </message>
    <message>
      <source>Search/Replace</source>
      <translation>Etsi/Korvaa</translation>
    </message>
    <message>
      <source>&amp;Fonts Preview...</source>
      <translation>&amp;Kirjaintyyppien esikatselu...</translation>
    </message>
    <message>
      <source>Clear all Text</source>
      <translation>Poista kaikki teksti</translation>
    </message>
    <message>
      <source>&amp;Smart text selection</source>
      <translation>&amp;Älykäs tekstin valitseminen</translation>
    </message>
  </context>
  <context>
    <name>StyleSelect</name>
    <message>
      <source>Underline</source>
      <translation>Alleviivattu</translation>
    </message>
    <message>
      <source>Small Caps</source>
      <translation>Kapiteelit</translation>
    </message>
    <message>
      <source>Subscript</source>
      <translation>Alaindeksi</translation>
    </message>
    <message>
      <source>Superscript</source>
      <translation>Yläindeksi</translation>
    </message>
    <message>
      <source>Outline Text</source>
      <translation>Teksti ääriviivoilla</translation>
    </message>
    <message>
      <source>Strike Out</source>
      <translation>Yliviivattu</translation>
    </message>
  </context>
  <context>
    <name>SxwDialog</name>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Use document name as a prefix for paragraph styles</source>
      <translation>Käytä asiakirjan nimeä kappaletyylin edessä</translation>
    </message>
    <message>
      <source>Do not ask again</source>
      <translation>Älä kysy uudestaan</translation>
    </message>
    <message>
      <source>OpenOffice.org Writer Importer Options</source>
      <translation>OpenOffice.org Writer tuojan asetukset</translation>
    </message>
    <message>
      <source>Update Paragraph Styles</source>
      <translation>Päivitä kappaletyylit</translation>
    </message>
    <message>
      <source>Enabling this will overwrite existing styles in the current Scribus document</source>
      <translation>Ylikirjoita olemassa olevat kappaletyylit</translation>
    </message>
    <message>
      <source>Merge Paragraph Styles</source>
      <translation>Yhdistä kappaletyylit</translation>
    </message>
    <message>
      <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document's styles are named differently.</source>
      <translation>Yhdistää kappaletyylit tyylien asetusten perusteella. Tuloksena on vähemmän kappaletyylejä.</translation>
    </message>
    <message>
      <source>Prepend the document name to the paragraph style name in Scribus.</source>
      <translation>Käytä tuotavan asiakirjan nimeä kappaletyylin nimessä.</translation>
    </message>
    <message>
      <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
      <translation>Aseta tämänhetkiset valinnat oletusarvoiksi äläkä kysy asetuksia uudestaan tuotaessa OpenOffice.org 1.x asiakirjaa.</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Peruuta</translation>
    </message>
  </context>
  <context>
    <name>TabManager</name>
    <message>
      <source>Manage Tabulators</source>
      <translation>Sarkainten hallinta</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>Tabruler</name>
    <message>
      <source>Left</source>
      <translation>Vasen</translation>
    </message>
    <message>
      <source>Right</source>
      <translation>Oikea</translation>
    </message>
    <message>
      <source>Full Stop</source>
      <translation>Piste</translation>
    </message>
    <message>
      <source>Comma</source>
      <translation>Pilkku</translation>
    </message>
    <message>
      <source>Center</source>
      <translation>Keskitetty</translation>
    </message>
    <message>
      <source>Delete All</source>
      <translation>Poista kaikki</translation>
    </message>
    <message>
      <source>Indentation for first line of the paragraph</source>
      <translation>Kappaleen ensimmäisen rivin sisennys</translation>
    </message>
    <message>
      <source>Indentation from the left for the whole paragraph</source>
      <translation>Koko kappaleen sisennys vasemmalta</translation>
    </message>
    <message>
      <source>Delete all Tabulators</source>
      <translation>Poista kaikki sarkaimet</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
    <message>
      <source>&amp;Position:</source>
      <translation>&amp;Sijainti:</translation>
    </message>
    <message>
      <source>First &amp;Line:</source>
      <translation>&amp;Ensimmäinen rivi:</translation>
    </message>
    <message>
      <source>Left Ind&amp;ent:</source>
      <translation>&amp;Vasen sisennys:</translation>
    </message>
  </context>
  <context>
    <name>Tree</name>
    <message>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <source>Line</source>
      <translation>Rivi</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>Sivu</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>Teksti</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>Tyyppi</translation>
    </message>
    <message>
      <source>Font:</source>
      <translation>Kirjaintyyppi:</translation>
    </message>
    <message>
      <source>Image</source>
      <translation>Kuva</translation>
    </message>
    <message>
      <source>Polyline</source>
      <translation>Kulmikas viiva</translation>
    </message>
    <message>
      <source>Outline</source>
      <translation>Rakenne</translation>
    </message>
    <message>
      <source>Polygon</source>
      <translation>Monikulmio</translation>
    </message>
    <message>
      <source>PathText</source>
      <translation>Teksti polulla</translation>
    </message>
    <message>
      <source>Information</source>
      <translation>Tiedot</translation>
    </message>
    <message>
      <source>Element</source>
      <translation>Osa</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Varoitus</translation>
    </message>
    <message>
      <source>Name &quot;%1&quot; isn't unique.
Please choose another.</source>
      <translation>Nimi &quot;%1&quot; on jo käytössä.
Ole hyvä ja valitse toinen nimi.</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Group </source>
      <translation>Ryhmä</translation>
    </message>
  </context>
  <context>
    <name>ValueDialog</name>
    <message>
      <source>Insert value</source>
      <translation>Lisää arvo</translation>
    </message>
    <message>
      <source>Enter a value then press OK.</source>
      <translation>Syötä arvo ja paina OK.</translation>
    </message>
    <message>
      <source>Enter a value then press OK</source>
      <translation>Syötä arvo ja paina OK</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>Send your value to the script</source>
      <translation>Lähetä arvo skriptille</translation>
    </message>
  </context>
  <context>
    <name>VlnaDialog</name>
    <message>
      <source>Short Words</source>
      <comment>short words plugin</comment>
      <translation>Short Words</translation>
    </message>
    <message>
      <source>Apply unbreakable space on:</source>
      <comment>short words plugin</comment>
      <translation>Käytä sitovaa välilyöntiä:</translation>
    </message>
    <message>
      <source>&amp;Selected frames</source>
      <comment>short words plugin</comment>
      <translation>&amp;Valitut kehykset</translation>
    </message>
    <message>
      <source>Active &amp;page</source>
      <comment>short words plugin</comment>
      <translation>Valittu &amp;sivu</translation>
    </message>
    <message>
      <source>&amp;All items</source>
      <comment>short words plugin</comment>
      <translation>&amp;Kaikki kohteet</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <comment>short words plugin</comment>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <comment>short words plugin</comment>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>&amp;Info and
Languages</source>
      <comment>short words plugin</comment>
      <translation>&amp;Tiedot ja kielet</translation>
    </message>
    <message>
      <source>Replace defaults by user config</source>
      <comment>short words plugin</comment>
      <translation>Korvaa oletukset käyttäjän asetuksilla</translation>
    </message>
    <message>
      <source>When the user config file exists 
(%1)
you can choose if you want to append your config
to the global configuration by unchecked button.

You can replace predefined values by yours
with checked button too.</source>
      <comment>short words plugin</comment>
      <translation>Kun käyttäjän asetustiedosto löytyy
(%1)
voit valita haluatko lisätä oman asetustiedostosi yleisiin
asetuksiin merkkaamattomilla painikkeilla.

Voit korvata esimääritellyt arvot omillasi valituilla painikkeilla.</translation>
    </message>
    <message>
      <source>Only selected frames processed.</source>
      <comment>short words plugin</comment>
      <translation>Ainoastaan valitut kehykset käyty läpi.</translation>
    </message>
    <message>
      <source>Only actual page processed.</source>
      <comment>short words plugin</comment>
      <translation>Vain valittu sivu käyty läpi.</translation>
    </message>
    <message>
      <source>All items in document processed.</source>
      <comment>short words plugin</comment>
      <translation>Kaikki asiakirjan kohteet käyty läpi.</translation>
    </message>
    <message>
      <source>Short Words for Scribus</source>
      <comment>short words plugin</comment>
      <translation>Short Words Scribukselle</translation>
    </message>
    <message>
      <source>Available in the following languages</source>
      <comment>short words plugin</comment>
      <translation>Saatavilla seuraavilla kielillä</translation>
    </message>
    <message>
      <source>About Short Words</source>
      <comment>short words plugin</comment>
      <translation>Tietoja Short Words:sta</translation>
    </message>
  </context>
  <context>
    <name>WerkToolB</name>
    <message>
      <source>Tools</source>
      <translation>Työkalut</translation>
    </message>
    <message>
      <source>Insert Lines</source>
      <translation>Lisää viiva</translation>
    </message>
    <message>
      <source>Insert Picture</source>
      <translation>Lisää kuva</translation>
    </message>
    <message>
      <source>Select Items</source>
      <translation>Valitse kohde</translation>
    </message>
    <message>
      <source>Edit Contents of Frame</source>
      <translation>Muokkaa kehyksen sisältöä</translation>
    </message>
    <message>
      <source>Insert Bezier Curves</source>
      <translation>Lisää Bezier-viiva</translation>
    </message>
    <message>
      <source>Rotate Item</source>
      <translation>Kierrä kohdetta</translation>
    </message>
    <message>
      <source>Properties...</source>
      <translation>Ominaisuudet...</translation>
    </message>
    <message>
      <source>Insert Polygons</source>
      <translation>Lisää monikulmio</translation>
    </message>
    <message>
      <source>Insert Text Frame</source>
      <translation>Lisää tekstikehys</translation>
    </message>
    <message>
      <source>Insert Freehand Line</source>
      <translation>Lisää vapaa viiva</translation>
    </message>
    <message>
      <source>Link Text Frames</source>
      <translation>Linkitä tekstikehykset</translation>
    </message>
    <message>
      <source>Unlink Text Frames</source>
      <translation>Pura tekstikehysten linkitys</translation>
    </message>
    <message>
      <source>Zoom in or out</source>
      <translation>Zoomaa lähemmäs tai kauemmas</translation>
    </message>
    <message>
      <source>Edit the text with the Story Editor</source>
      <translation>Muokkaa tekstiä editorilla</translation>
    </message>
    <message>
      <source>Draw various Shapes</source>
      <translation>Lisää kuvio</translation>
    </message>
    <message>
      <source>Insert Table</source>
      <translation>Lisää taulukko</translation>
    </message>
    <message>
      <source>Do measurements</source>
      <translation>Suorita mittauksia</translation>
    </message>
  </context>
  <context>
    <name>WerkToolBP</name>
    <message>
      <source>Link</source>
      <translation>Linkki</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>Teksti</translation>
    </message>
    <message>
      <source>List Box</source>
      <translation>Listavalikko</translation>
    </message>
    <message>
      <source>Combo Box</source>
      <translation>Alasvetovalikko</translation>
    </message>
    <message>
      <source>Button</source>
      <translation>Painike</translation>
    </message>
    <message>
      <source>Text Field</source>
      <translation>Tekstikenttä</translation>
    </message>
    <message>
      <source>Check Box</source>
      <translation>Valintaruutu</translation>
    </message>
    <message>
      <source>PDF Tools</source>
      <translation>PDF-työkalut</translation>
    </message>
    <message>
      <source>Insert PDF Fields</source>
      <translation>Lisää PDF-kenttä</translation>
    </message>
    <message>
      <source>Insert PDF Annotations</source>
      <translation>Lisää PDF-huomautus</translation>
    </message>
  </context>
  <context>
    <name>ZAuswahl</name>
    <message>
      <source>Select Character:</source>
      <translation>Valitse merkki:</translation>
    </message>
    <message>
      <source>Insert the characters at the cursor in the text</source>
      <translation>Lisää merkit kursorin kohdalle tekstiin</translation>
    </message>
    <message>
      <source>Delete the current selection(s).</source>
      <translation>Poista valinta/valinnat.</translation>
    </message>
    <message>
      <source>Close this dialog and return to text editing.</source>
      <translation>Sulje ikkuna ja palaa muokkaamaan tekstiä.</translation>
    </message>
    <message>
      <source>&amp;Insert</source>
      <translation>&amp;Lisää</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>&amp;Tyhjennä</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>&amp;Sulje</translation>
    </message>
  </context>
  <context>
    <name>gtFileDialog</name>
    <message>
      <source>Choose the importer to use</source>
      <translation>Valitse käytettävä tuojatyyppi</translation>
    </message>
    <message>
      <source>Automatic</source>
      <translation>Automaattinen</translation>
    </message>
    <message>
      <source>Import text without any formatting</source>
      <translation>Tuo teksti ilman muotoilua</translation>
    </message>
    <message>
      <source>Importer:</source>
      <translation>Tuoja:</translation>
    </message>
    <message>
      <source>Encoding:</source>
      <translation>Koodaus:</translation>
    </message>
    <message>
      <source>Import Text Only</source>
      <translation>Tuo ainoastaan teksti</translation>
    </message>
  </context>
  <context>
    <name>gtImporterDialog</name>
    <message>
      <source>Choose the importer to use</source>
      <translation>Valitse käytettävä tuojatyyppi</translation>
    </message>
    <message>
      <source>Remember association</source>
      <translation>Muista yhteys</translation>
    </message>
    <message>
      <source>Remember the file extension - importer association
and do not ask again to select an importer for
files of this type.</source>
      <translation>Muista tiedostpääte-tuoja -yhteys äläkä kysy
uudestaan tuotaessa tiedostoja tällä tiedostopäätteellä.</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
  </context>
  <context>
    <name>nftdialog</name>
    <message>
      <source>New From Template</source>
      <translation>Uusi mallista</translation>
    </message>
    <message>
      <source>All</source>
      <translation>Kaikki</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nimi</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>Sivun koko</translation>
    </message>
    <message>
      <source>Colors</source>
      <translation>Värit</translation>
    </message>
    <message>
      <source>Description</source>
      <translation>Kuvaus</translation>
    </message>
    <message>
      <source>Usage</source>
      <translation>Käyttö</translation>
    </message>
    <message>
      <source>Author</source>
      <translation>Tekijä</translation>
    </message>
    <message>
      <source>Created with</source>
      <translation>Tehty</translation>
    </message>
    <message>
      <source>&amp;Remove</source>
      <translation>&amp;Poista</translation>
    </message>
    <message>
      <source>&amp;Open</source>
      <translation>&amp;Avaa</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
    <message>
      <source>Downloading Templates</source>
      <translation>Asiakirjamallien hakeminen</translation>
    </message>
    <message>
      <source>Installing Templates</source>
      <translation>Asiakirjamallien asennus</translation>
    </message>
    <message>
      <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
      <translation>Pura paketti mallihakemistoon ~/.scribus/templates nykyiselle käyttäjälle tai PREFIX/share/scribus/templates kaikille järjestelmän käyttäjille.</translation>
    </message>
    <message>
      <source>Preparing a template</source>
      <translation>Asiakirjamallin valmistelu</translation>
    </message>
    <message>
      <source>Removing a template</source>
      <translation>Malliasiakirjan poistaminen</translation>
    </message>
    <message>
      <source>Translating template.xml</source>
      <translation>Template.xml-tiedoston kääntäminen</translation>
    </message>
    <message>
      <source>Date</source>
      <translation>Päivämäärä</translation>
    </message>
    <message>
      <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
      <translation>Asiakirjamalleja löytyy osoitteesta http://www.scribus.net/ Downloads-sivulta.</translation>
    </message>
    <message>
      <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
      <translation>Varmista että kuvia voidaan käyttää vapaasti. Jos kirjaintyyppiä ei voi levittää, älä kerää niitä tallentaessasi asiakirjamallin.</translation>
    </message>
    <message>
      <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
      <translation>Asiakirjapohjan tekijän tulisi varmistaa että kohta &quot;Asiakirjamallien asennus&quot; pätee myös hänen malleihinsa. Käyttäjän tulisi saada mallit käyttöönsä purkamalla asiakirjapohjapaketin mallihakemistoonsa.</translation>
    </message>
    <message>
      <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
      <translation>Poistettaessa malli &quot;Uusi mallista&quot;-dialogissa vain malliin liittyvät rivit template.xml-tiedostossa poistetaan; siihen liittyviä tiedostoja ei. Poistaminen on mahdollista ainoastaan, kun käyttäjällä on kirjoitusoikeus template.xml-tiedostoon.</translation>
    </message>
    <message>
      <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
      <translation>Kopioi olemassa oleva template.xml-tiedosto tiedostoon template.kieli_MAA.xml. Käytä samaa kielikoodia kuin käännöstiedostossa on käytetty kielellesi. Esimerkiksi suomenkielinen käännös tulisi nimetä template.fi.xml. Kopion tulee sijaita samassa hakemistossa kuin alkuperäinen template.xml-tiedosto.</translation>
    </message>
  </context>
  <context>
    <name>satdialog</name>
    <message>
      <source>Save as Template</source>
      <translation>Tallenna mallina</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nimi</translation>
    </message>
    <message>
      <source>Category</source>
      <translation>Tyyppi</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>Sivun koko</translation>
    </message>
    <message>
      <source>Colors</source>
      <translation>Värit</translation>
    </message>
    <message>
      <source>Description</source>
      <translation>Kuvaus</translation>
    </message>
    <message>
      <source>Usage</source>
      <translation>Käyttö</translation>
    </message>
    <message>
      <source>Author</source>
      <translation>Tekijä</translation>
    </message>
    <message>
      <source>Email</source>
      <translation>Sähköpostiosoite</translation>
    </message>
    <message>
      <source>More Details</source>
      <translation>Lisää yksityiskohtia</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Less Details</source>
      <translation>Vähemmän yksityiskohtia</translation>
    </message>
    <message>
      <source>Legal</source>
      <translation>Legal</translation>
    </message>
    <message>
      <source>Letter</source>
      <translation>Letter</translation>
    </message>
    <message>
      <source>Tabloid</source>
      <translation>Tabloid</translation>
    </message>
    <message>
      <source>landscape</source>
      <translation>vaakasuora</translation>
    </message>
    <message>
      <source>portrait</source>
      <translation>pystysuora</translation>
    </message>
    <message>
      <source>custom</source>
      <translation>oma</translation>
    </message>
  </context>
  <context>
    <name>tfDia</name>
    <message>
      <source>Create filter</source>
      <translation>Luo suodin</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>&amp;Tyhjennä</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>P&amp;oista</translation>
    </message>
    <message>
      <source>Choose a previously saved filter</source>
      <translation>Valitse tallennettu suodin</translation>
    </message>
    <message>
      <source>Give a name to this filter for saving</source>
      <translation>Anna nimi tallennusta varten</translation>
    </message>
    <message>
      <source>Give a name for saving</source>
      <translation>Anna nimi tallennusta varten</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Peruuta</translation>
    </message>
  </context>
  <context>
    <name>tfFilter</name>
    <message>
      <source>Disable or enable this filter row</source>
      <translation>Poista käytöstä tai ota käyttöön tämä rivi</translation>
    </message>
    <message>
      <source>Remove this filter row</source>
      <translation>Poista tämä rivi</translation>
    </message>
    <message>
      <source>Add a new filter row</source>
      <translation>Lisää uusi rivi suotimeen</translation>
    </message>
    <message>
      <source>to</source>
      <translation>mihin</translation>
    </message>
    <message>
      <source>and</source>
      <translation>ja</translation>
    </message>
    <message>
      <source>remove match</source>
      <translation>poista osuma</translation>
    </message>
    <message>
      <source>do not remove match</source>
      <translation>älä poista osumaa</translation>
    </message>
    <message>
      <source>words</source>
      <translation>sanaa</translation>
    </message>
    <message>
      <source>Remove</source>
      <translation>Poista</translation>
    </message>
    <message>
      <source>Replace</source>
      <translation>Korvaa</translation>
    </message>
    <message>
      <source>Apply</source>
      <translation>Käytä</translation>
    </message>
    <message>
      <source>with</source>
      <translation>millä</translation>
    </message>
    <message>
      <source>paragraph style</source>
      <translation>Kappaletyyliä</translation>
    </message>
    <message>
      <source>all instances of</source>
      <translation>kaikki</translation>
    </message>
    <message>
      <source>all paragraphs</source>
      <translation>kaikkiin kappaleisiin</translation>
    </message>
    <message>
      <source>paragraphs starting with</source>
      <translation>kappaleisiin, jotka alkavat</translation>
    </message>
    <message>
      <source>paragraphs with less than</source>
      <translation>kappaleisiin, joissa on vähemmän kuin</translation>
    </message>
    <message>
      <source>paragraphs with more than</source>
      <translation>kappaleisiin, joissa on enemmän kuin</translation>
    </message>
    <message>
      <source>Value at the left is a regular expression</source>
      <translation>Teksti vasemmalla on regular expression</translation>
    </message>
  </context>
</TS>
