import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import com.google.gson.*;
public class GetRequest {
    // public static void main(String[] args) {
        
    // }
    static int getNumberOfMovies(String substr) {
        /*
         * Endpoint: "https://jsonmock.hackerrank.com/api/movies/search/?Title=substr"
         */
        int totalMoviesFound = 0;
        String response;
        BufferedReader br;
        try {
            URL obj = new URL("https://jsonmock.hackerrank.com/api/movies/search/?Title=" + substr);
            HttpURLConnection connection = (HttpURLConnection) obj.openConnection();
            connection.setRequestMethod("GET");
            br = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            while((response = br.readLine())  != null) {
                System.out.println(response);
                JsonObject convertedObject = new Gson().fromJson(response, JsonObject.class);
                totalMoviesFound = convertedObject.get("total").getAsInt();
            }
            br.close();
        } catch (Exception e) {
            //TODO: handle exception
            e.printStackTrace();
        } 
        return totalMoviesFound;
    }
}
