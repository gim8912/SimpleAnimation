using UnityEngine;
using System.Collections;
//using SocketIOClient;


public class CustomEventHandler : MonoBehaviour, ITrackableEventHandler {

	private TrackableBehaviour mTrackableBehaviour;
	private bool isRendered = false;
	private GameObject Plane;

	// Use this for initialization
	void Start () {
		Plane = GameObject.Find("Plane");

//		Client client = new Client("172.20.10.3:3000");

//		client.Opened += SocketOpened;  
//		client.Message += SocketMessage;  
//		client.SocketConnectionClosed += SocketConnectionClosed;  
//		client.Error +=SocketError;

//		client.Connect();



		mTrackableBehaviour = GetComponent<TrackableBehaviour>();
		if (mTrackableBehaviour)
		{
			mTrackableBehaviour.RegisterTrackableEventHandler(this);
		}
		
		OnTrackingLost();
	}
	
	// Update is called once per frame
	void Update () {
		//Debug.Log("Tracking: " + (isRendered?"TRUE":"FALSE"));
		 if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Ended) {

		 	RaycastHit hit;
		 	Ray ray;
		 	ray = Camera.main.ScreenPointToRay(Input.GetTouch(0).position);

			if(Physics.Raycast(ray,out hit))
        	{
	            //set a flag to indicate to move the gameobject
	            //flag = true;
	            //save the click / tap position
	            //endPoint = hit.point;
	            //as we do not want to change the y axis value based on touch position, reset it to original y axis value
	            //endPoint.y = yAxis;
	            //Debug.Log(hit.point);
	            float x = Mathf.Round(hit.point.x + 960);
	            float y = Mathf.Round(540 - hit.point.z);

				string url = "http://172.20.10.3:3000/touch?x="+x+"&y="+y;
    	    	WWW www = new WWW(url);
        		StartCoroutine(WaitForRequest(www));


	            Debug.Log("Hit");
	        }

// 		 	Debug.Log("x: " + Input.GetTouch(0).position.x);
//		 	Debug.Log("y: " + Input.GetTouch(0).position.y);
//			Debug.Log(this.renderer.bounds);
       }
	}

	public void OnTrackableStateChanged(
		TrackableBehaviour.Status previousStatus,
		TrackableBehaviour.Status newStatus)
	{
		if (newStatus == TrackableBehaviour.Status.DETECTED ||
			newStatus == TrackableBehaviour.Status.TRACKED)
		{
			OnTrackingFound();
		} 
		else 
		{
			OnTrackingLost();
		}
	}

	private void OnTrackingFound()
	{
		isRendered = true;
	}

	private void OnTrackingLost()
	{
		isRendered = false;
	}

	IEnumerator WaitForRequest(WWW www)
    {
        yield return www;
 
        // check for errors
        if (www.error == null)
        {
            Debug.Log("WWW Ok!: " + www.data);
        } else {
            Debug.Log("WWW Error: "+ www.error);
        }    
    }

//	private void SocketOpened(object sender, MessageEventArgs e) {
    	//invoke when socket opened
//	}
}
