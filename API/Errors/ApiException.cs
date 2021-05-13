namespace API.Errors
{
    public class ApiException
    {
        public ApiException(int statusCode, string message = null, string messageDetails = null)
        {
            StatusCode = statusCode;
            Message = message;
            MessageDetails = messageDetails;
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string MessageDetails { get; set; }
    }
}