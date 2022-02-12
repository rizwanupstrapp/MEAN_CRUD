export class appConstants {
    public static readonly DRIVER_VERIFIED_STATUS: any = 
        {
            Pending: 0,
            Filled: 1,
            Rejected: 2,
            Verified: 3
        }
    public static readonly REGISTRATION_TYPE: any = 
        {
           NORMAL: 0,
           GOOGLE: 1,
           FACEBOOK: 2,
           INSTAGRAM: 3
        }    
    public static readonly FREQUENCY_TYPE: any =
        {
            1: { value: 1, key: "1 Month" },
            2: { value: 3, key: "3 Month" },
            3: { value: 6, key: "6 Month" },
            4: { value: 12, key: "12 Month" }
        }   
}