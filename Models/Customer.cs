using System;
using System.Collections.Generic;

namespace bbb.Models
{
    public partial class Customer
    {
        public string Custid { get; set; }
        public string InitialName { get; set; }
        public string Name { get; set; }
        public short? CustType { get; set; }
        public string InitialCode { get; set; }
        public string Lastname { get; set; }
    }
}
