Cordova Plugin HtmltoPdf in IOS

1. Cordova plugin add https://gitlab.myhdp.de/kvr/Cordova_Plugin_Html2PDF_KVR.git
2. im Frontend danach über "html2pdf.print(<html>,<name>)" ansprechen

Rückgabewert Ort der Datei!


OPTIONAL!
- der folgende Codeblock legt den Pfad auf das /documentsDirectory in IOS.
  Um diesen zu veranderen kann alternative die ersten 3Zeilen auskommentiert werden und "pdfFile" durch Pfad+<name> ersetzt werden!

    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    NSString * pdfFile = [documentsDirectory stringByAppendingPathComponent:Name];
    [pdfData writeToFile:pdfFile atomically:YES];

Hilfen!
- weitere Hilfe bietet das Cordova Plugin "File" zu Verfuegung das bereits feste Pfade in IOS System besitzt!
- Hilfreich ist auch das Plugin "fileopener2", da der Pfad zur Datei zurueckgegeben wird, kann dieses Plugin die Datei
  sofort Aufrufen und zeigt eine Liste von verfuegbaren Apps die diese Datei unterstuetzen und öffnen können

  Bitte auf Codierung der .m und .h Dateien achten!

Author:KVR
