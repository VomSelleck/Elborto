//imports agents name, profile, memories, import pushes a message when done
import { AgentProcess } from './src/process/agent-process.js';

//pulls settings from designated file
import settings from './settings.js';


// Retrieve the 'profiles' property from the 'settings' object and assign it to the 'profiles' variable
let profiles = settings.profiles;

// Retrieve the 'load_memory' property from the 'settings' object and assign it to the 'load_memory' variable
let load_memory = settings.load_memory;

// Retrieve the 'init_message' property from the 'settings' object and assign it to the 'init_message' variable
let init_message = settings.init_message;
0
// Retrieve the 'profiles' property from the 'settings' object
// This property likely contains user-defined profiles for the application
let profiles = settings.profiles;

// Retrieve the 'load_memory' property from the 'settings' object
// This boolean indicates whether to load any previously saved data or state
let load_memory = settings.load_memory;

// Retrieve the 'init_message' property from the 'settings' object
// This string holds the initial message to be displayed to the user
let init_message = settings.init_message;