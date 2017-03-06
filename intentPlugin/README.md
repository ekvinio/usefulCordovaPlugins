Cordova Plugin Android Intent um Dateien zu teilen!(Cordova v4 gestestet auf Android 5)

-Hinzufügen mit cordova plugin add <plugin>

-Konfiguration in AndroidManifest.xml
        <intent-filter>
        <action android:name="android.intent.action.SEND" />
        <category android:name="android.intent.category.DEFAULT" />
        <data android:mimeType="*/*" />
        </intent-filter>

- Aufruf im Frontend über "Intentplugin.getData();"
        gibt Intenttyp und Pfad der Datei wieder
