import org.apache.cordova.CordovaActivity;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.*;
import android.net.Uri;
import android.text.Html;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaResourceApi;
import org.apache.cordova.PluginResult;

import android.util.*;
import android.os.*;
import java.util.*;

public class Intentplugin extends CordovaPlugin {
    public static final String LOG_TAG = "myCordovaPluginActivity";

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
            String erg = "";
            if (action.equals("getData")) {
                Intent i = ((CordovaActivity)this.cordova.getActivity()).getIntent();
                Bundle bundle = i.getExtras();
                if (bundle != null) {
                    Set<String> keys = bundle.keySet();
                    Iterator<String> it = keys.iterator();
                    //Log.e(LOG_TAG,"Dumping Intent start");

                    while (it.hasNext()) {
                        String key = it.next();
                        erg = "" + bundle.get(key) + "";
                        //Log.e(LOG_TAG,"[" + key + "=" + bundle.get(key)+"]");
                    }
                    //Log.e(LOG_TAG,"Dumping Intent end");
                }
                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK,erg));
            }
            return false;
        }
}
