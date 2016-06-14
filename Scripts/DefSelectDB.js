var selectDB = function(port, dbName)
{
	if(!port)
	{
		port = 27017;
	}
	
	if(!dbName)
	{
		dbName = "test_1";
	}
	
	db = connect("localHost:" + port + "/" + dbName);
	
	return db;
	
}