class NotesController < ApplicationController
    def index
        render json: Note.all
    end
    
    def create
        notes = @current_user.notes.create!(note_params)
        render json: notes, status: :created
    end
    
    private
    
    def note_params
        params.permit(:title, :content)
    end
end
