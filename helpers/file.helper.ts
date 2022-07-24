import fs from 'fs';

export interface FileToDelete {
	path: string;
}

export const deleteSingleFile = (path: string) => {
	fs.unlink(path, err => {
		if (err) throw err;
	});
};

export const deleteMultipleFiles = (files: FileToDelete[]) => {
	files.forEach(file => deleteSingleFile(file.path));
};
