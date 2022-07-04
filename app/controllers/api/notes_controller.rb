class Api::NotesController < ApplicationController
    def index
        render json: Note.all
      end
    
      def create
        note = @current_user.notes.create!(note_params)
        render json: note, status: :created
      end
    
      private
    
      def note_params
          params.permit(:title, :content)
      end
end
